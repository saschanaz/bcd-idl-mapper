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

export default function resolveAlternativeNames(
  data,
  translateName = (n) => n
) {
  const { support } = data.__compat ?? {};
  if (!support) {
    return {};
  }
  const alternativeSupportMap = new Map();
  for (const [browserName, browserData] of Object.entries(support)) {
    const array = Array.isArray(browserData) ? browserData : [browserData];
    const alternatives = array.filter(
      (data) => data.alternative_name || data.prefix
    );
    for (const data of alternatives) {
      const alternativeName = data.alternative_name
        ? data.alternative_name
        : addPrefix(data.prefix, name);

      const alternativeSupport =
        alternativeSupportMap.get(alternativeName) || {};
      alternativeSupport[browserName] = { ...data };
      delete alternativeSupport[browserName].alternative_name;
      delete alternativeSupport[browserName].prefix;
      alternativeSupportMap.set(alternativeName, alternativeSupport);
    }
  }
  const record = {};
  for (const [alternativeKey, alternativeValue] of alternativeSupportMap) {
    record[translateName(alternativeKey)] = {
      __compat: { ...data.__compat, support: alternativeValue },
    };
  }
  return record;
}
