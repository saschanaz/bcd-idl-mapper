export function foo(
  inclusionArrayMap,
  mixins,
  mixinCompats,
  interfaceName,
  interfaceData
) {
  const inclusions = inclusionArrayMap.get(interfaceName);
  if (!inclusions) {
    return;
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
          mixinCompats[mixin.name][memberName] = {};
        }
        mixinCompats[mixin.name][memberName][interfaceName] = memberData;
      }
    }
  }
}
