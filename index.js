import bcd from "@mdn/browser-compat-data" with { type: "json" };
import resolveMixins from "./lib/mixin.js";
import css from "./lib/css.js";
import resolveAlternatives from "./lib/alternative-name.js";
import jsidl from "./lib/jsidl.js";
import resolveEvents from "./lib/event.js";

const resolving = { ...bcd.api };
resolveEvents(resolving);
resolveAlternatives(resolving);

export default {
  __mixins: resolveMixins(resolving),
  ...resolving,
  CSSStyleDeclaration: { ...bcd.api.CSSStyleDeclaration, ...css },
  ...jsidl,
};
