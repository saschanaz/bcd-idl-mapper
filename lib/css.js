import bcd from "@mdn/browser-compat-data";
import resolveAlternativeNames from "./alternative-resolver.js";

/**
 * @param {string} name
 */
function hyphenToCamelCase(name) {
  return name
    .replace(/^-(\w)/, (_, c) => c)
    .replace(/-(\w)/g, (_, c) => c.toUpperCase());
}

const cssRecord = {};
for (const [propertyName, propertyData] of Object.entries(bcd.css.properties)) {
  const camelName = hyphenToCamelCase(propertyName);
  cssRecord[camelName] = propertyData;

  Object.assign(
    cssRecord,
    resolveAlternativeNames(camelName, propertyData, hyphenToCamelCase)
  );
}

export default cssRecord;
