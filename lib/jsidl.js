import bcd from "@mdn/browser-compat-data" assert { type: "json" };

// Some JS APIs are defined via Web IDL
export default {
  WebAssembly: bcd.webassembly.api,
};
