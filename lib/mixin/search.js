/**
 * @param {Map<string, string[]>} inclusionArrayMap
 * @param {Map<string, import("webidl2").InterfaceType>} interfaceMap
 * @param {string} interfaceName
 * @returns
 */
function findAllInclusions(inclusionArrayMap, interfaceMap, interfaceName) {
  const inclusions = inclusionArrayMap.get(interfaceName) || [];
  let i = interfaceMap.get(interfaceName);
  while (i?.inheritance) {
    inclusions.push(...(inclusionArrayMap.get(i.inheritance) || []));
    i = interfaceMap.get(i.inheritance);
  }
  return inclusions;
}

export function mapMembersToMixin(
  inclusionArrayMap,
  interfaceMap,
  mixins,
  mixinCompats,
  interfaceName,
  interfaceData,
) {
  const inclusions = findAllInclusions(
    inclusionArrayMap,
    interfaceMap,
    interfaceName,
  );

  const includedMixins = inclusions.map((name) => mixins.get(name));
  // XXX: see https://github.com/mdn/browser-compat-data/issues/17127
  if (["Node", "Element"].includes(interfaceName)) {
    includedMixins.push(mixins.get("GlobalEventHandlers"));
  }

  if (!includedMixins.length) {
    return;
  }

  for (const [memberName, memberData] of Object.entries(interfaceData)) {
    if (memberName === "__compat") {
      continue;
    }

    for (const mixin of includedMixins) {
      const member = mixin.members.find((member) => member.name === memberName);
      if (member) {
        if (!mixinCompats[mixin.name][memberName]) {
          mixinCompats[mixin.name][memberName] = {};
        }
        mixinCompats[mixin.name][memberName][interfaceName] = memberData;
      }
    }
  }
}
