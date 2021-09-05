import webrefIdl from "@webref/idl";
import bcd from "@mdn/browser-compat-data";
import resolveAlternativeNames from "./alternative-resolver.js";
import { foo as mapMembersToMixin } from "./mixin/search.js";

const astRecord = await webrefIdl.parseAll();

// TODO: merge partial mixins in https://github.com/w3c/webidl2.js/pull/584

const mixins = new Map();
const partialArrayMap = new Map();
const inclusionArrayMap = new Map();
for (const ast of Object.values(astRecord)) {
  for (const item of ast) {
    switch (item.type) {
      case "interface mixin": {
        if (item.partial) {
          const array = partialArrayMap.get(item.name) || [];
          array.push(item);
          partialArrayMap.set(item.name, array);
        } else {
          mixins.set(item.name, item);
        }
        break;
      }
      case "includes": {
        const array = inclusionArrayMap.get(item.target) || [];
        array.push(item.includes);
        inclusionArrayMap.set(item.target, array);
        break;
      }
    }
  }
}

for (const partials of partialArrayMap.values()) {
  const mixin = mixins.get(partials[0].name);
  for (const partial of partials) {
    mixin.members.push(...partial.members);
  }
}

const mixinCompats = {};
for (const name of mixins.keys()) {
  mixinCompats[name] = {};
}

for (const [interfaceName, interfaceData] of Object.entries(bcd.api)) {
  mapMembersToMixin(
    inclusionArrayMap,
    mixins,
    mixinCompats,
    interfaceName,
    interfaceData
  );
}
for (const global of [
  "Window",
  "WorkerGlobalScope",
  "DedicatedWorkerGlobalScope",
  "SharedWorkerGlobalScope",
  "ServiceWorkerGlobalScope",
]) {
  mapMembersToMixin(inclusionArrayMap, mixins, mixinCompats, global, bcd.api);
}

// Prefer api.(mixinname) if exists, but they will eventually be removed completely
for (const mixinName of mixins.keys()) {
  if (bcd.api[mixinName]) {
    Object.assign(mixinCompats[mixinName], bcd.api[mixinName]);
  }
}

for (const mixinData of Object.values(mixinCompats)) {
  for (const [mixinName, mixinMember] of Object.entries(mixinData)) {
    Object.assign(mixinData, resolveAlternativeNames(mixinName, mixinMember));
  }
}

export default mixinCompats;
