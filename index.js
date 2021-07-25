import bcd from "@mdn/browser-compat-data";
import mixins from "./lib/mixin.js";
import css from "./lib/css.js";
import alternatives from "./lib/alternative-name.js";

export default {
  __mixins: mixins,
  ...bcd.api,
  ...alternatives,
  CSSStyleDeclaration: { ...bcd.api.CSSStyleDeclaration, ...css },
};
