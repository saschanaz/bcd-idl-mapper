import bcd from "@mdn/browser-compat-data";
import resolveAlternativeNames from "./alternative-resolver.js";

const resolvedApi = {};
for (const [interfaceName, interfaceData] of Object.entries(bcd.api)) {
  const resolved = {};
  for (const [memberName, memberData] of Object.entries(interfaceData)) {
    Object.assign(resolved, resolveAlternativeNames(memberName, memberData));
  }
  if (Object.keys(resolved).length) {
    resolvedApi[interfaceName] = {
      ...bcd.api[interfaceName],
      ...resolved,
    };
  }
}

export default resolvedApi;
