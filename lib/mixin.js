import webrefIdl from "@webref/idl";
import bcd from "@mdn/browser-compat-data";

const astRecord = await webrefIdl.parseAll();

const mixins = new Map();
const inclusionArrayMap = new Map();
for (const ast of Object.values(astRecord)) {
  for (const item of ast) {
    switch (item.type) {
      case "interface mixin": {
        mixins.set(item.name, item);
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

const mixinCompats = {};
for (const name of mixins.keys()) {
  mixinCompats[name] = {
    __compat: { support: {} },
  };
}

for (const [interfaceName, interfaceData] of Object.entries(bcd.api)) {
  const inclusions = inclusionArrayMap.get(interfaceName);
  if (!inclusions) {
    continue;
  }
  const includedMixins = inclusions.map((name) => mixins.get(name));
  for (const [memberName, memberData] of Object.entries(interfaceData)) {
    if (memberName === "__compat") {
      continue;
    }

    for (const mixin of includedMixins) {
      const member = mixin.members.find((member) => member.name === memberName);
      if (member) {
        if (!mixinCompats[mixin.name][memberName]) {
          mixinCompats[mixin.name][memberName] = [];
        }
        mixinCompats[mixin.name][memberName].push(memberData);
      }
    }
  }
}

export default mixinCompats;
