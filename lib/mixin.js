import webrefIdl from "@webref/idl";
import { mapMembersToMixin } from "./mixin/search.js";

const astRecord = await webrefIdl.parseAll();

// TODO: merge partial mixins in https://github.com/w3c/webidl2.js/pull/584

// export default mixinCompats;

/**
 * @param {import("@mdn/browser-compat-data/types").Identifier} bcdApi
 * @return {import("@mdn/browser-compat-data/types").Identifier}
 */
export default function resolve(bcdApi) {
  const mixins = new Map();
  const partialArrayMap = new Map();
  const inclusionArrayMap = new Map();
  const interfaceMap = new Map();
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
        case "interface": {
          if (!item.partial) {
            interfaceMap.set(item.name, item);
          }
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

  for (const [interfaceName, interfaceData] of Object.entries(bcdApi)) {
    mapMembersToMixin(
      inclusionArrayMap,
      interfaceMap,
      mixins,
      mixinCompats,
      interfaceName,
      interfaceData,
    );
  }
  for (const global of [
    "Window",
    "WorkerGlobalScope",
    "DedicatedWorkerGlobalScope",
    "SharedWorkerGlobalScope",
    "ServiceWorkerGlobalScope",
  ]) {
    mapMembersToMixin(
      inclusionArrayMap,
      interfaceMap,
      mixins,
      mixinCompats,
      global,
      bcdApi,
    );
  }

  // Prefer api.(mixinname) if exists, but they will eventually be removed completely
  for (const mixinName of mixins.keys()) {
    if (bcdApi[mixinName]) {
      Object.assign(mixinCompats[mixinName], bcdApi[mixinName]);
    }
  }

  return mixinCompats;
}
