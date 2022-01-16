import resolveAlternativeNames from "./alternative-resolver.js";

/**
 * @param {import("@mdn/browser-compat-data/types").PrimaryIdentifier} bcdApi
 * @return {import("@mdn/browser-compat-data/types").PrimaryIdentifier}
 */
export default function resolve(bcdApi) {
  for (const [interfaceName, interfaceData] of Object.entries(bcdApi)) {
    const resolved = {};
    for (const [memberName, memberData] of Object.entries(interfaceData)) {
      Object.assign(resolved, resolveAlternativeNames(memberName, memberData));
    }
    if (Object.keys(resolved).length) {
      bcdApi[interfaceName] = {
        ...bcdApi[interfaceName],
        ...resolved,
      };
    }
  }
}
