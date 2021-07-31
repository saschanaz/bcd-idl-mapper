# bcd-idl-mapper

This exposes a modified `api` field value of [@mdn/browser-compat-data](https://www.npmjs.com/package/@mdn/browser-compat-data) as the default export, with the following changes:

* Mixins are in `__mixins`, e.g. `api.__mixins.WindowEventHandlers.onstorage`.
  * Each member data have no direct `__compat`
  * Each member data have subitems with `__compat`, e.g. `api.__mixins.NavigatorLanguage.language.WorkerNavigator`
* CSS properties are in `CSSStyleDeclaration` in camel cased form, e.g. `api.CSSStyleDeclaration.justifyContent`
* `alternative_name` and `prefix` are mapped as separate items, e.g. `api.Navigator.clientInformation` and `api.CSSStyleDeclaration.webkitJustifyContent`.

`.__compat.support` object has one more field named `preferred_name`, which only exists in items generated from `alternative_name` or `prefix`.
