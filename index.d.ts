import { PrimaryIdentifier } from "@mdn/browser-compat-data/types";
export * from "@mdn/browser-compat-data/types";

declare module "@mdn/browser-compat-data/types" {
  interface StatusBlock {
    preferred_name?: string;
  }
}

declare var api: PrimaryIdentifier;
export default api;
