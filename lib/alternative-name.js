import bcd from "@mdn/browser-compat-data";
import resolveAlternativeNames from "./alternative-resolver.js";

const resolvedApi = {};
for (const [interfaceName, interfaceData] of Object.entries(bcd.api)) {
  for (const memberData of Object.values(interfaceData)) {
    resolvedApi[interfaceName] = {
      ...resolvedApi[interfaceName],
      ...resolveAlternativeNames(memberData),
    };
  }
}

export default resolvedApi;
