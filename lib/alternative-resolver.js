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
    const alternatives = array.filter((data) => data.alternative_name);
    for (const data of alternatives) {
      const alternativeSupport =
        alternativeSupportMap.get(data.alternative_name) || {};
      alternativeSupport[browserName] = { ...data };
      delete alternativeSupport[browserName].alternative_name;
      alternativeSupportMap.set(data.alternative_name, alternativeSupport);
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
