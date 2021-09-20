/**
 * @param {string} prefix
 * @param {string} name
 */
function addPrefix(prefix, name) {
  if (prefix.endsWith("-")) {
    return prefix + name;
  }
  return prefix + name[0].toUpperCase + name.slice(1);
}

/**
 * @param {string} name
 * @param {import("..").Identifier} data
 * @param {*} translateName
 * @returns
 */
export default function resolveAlternativeNames(
  name,
  data,
  translateName = (n) => n
) {
  const compats = data.__compat
    ? [data.__compat]
    : Object.entries(data)
        .filter(([key, value]) => key.endsWith("_context") && !!value.__compat)
        .map(([, value]) => value.__compat);
  if (!compats.length) {
    return {};
  }
  /** @type {Map<string, import("..").CompatData>} */
  const alternativeCompatMap = new Map();
  for (const compat of compats) {
    for (const [browserName, browserData] of Object.entries(compat.support)) {
      const array = Array.isArray(browserData) ? browserData : [browserData];
      const alternatives = array.filter(
        (data) => data.alternative_name || data.prefix
      );
      for (const data of alternatives) {
        const alternativeName = data.alternative_name
          ? data.alternative_name
          : addPrefix(data.prefix, name);

        /** @type {import("..").CompatData} */
        const alternativeCompat = alternativeCompatMap.get(alternativeName) || {
          ...compat,
          description: `An alternative name of ${name}`,
          support: {},
          status: { ...compats.status, preferred_name: name },
        };
        alternativeCompat.support[browserName] = { ...data };
        delete alternativeCompat.support[browserName].alternative_name;
        delete alternativeCompat.support[browserName].prefix;
        alternativeCompatMap.set(alternativeName, alternativeCompat);
      }
    }
  }
  const record = {};
  for (const [alternativeKey, alternativeValue] of alternativeCompatMap) {
    record[translateName(alternativeKey)] = {
      __compat: alternativeValue,
    };
  }
  return record;
}
