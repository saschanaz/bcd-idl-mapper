/**
 * @param {import("@mdn/browser-compat-data/types").Identifier} bcdApi
 */
export default function resolve(bcdApi) {
  for (const [interfaceName, interfaceData] of Object.entries(bcdApi)) {
    const eventMembers = new Map(
      Object.entries(interfaceData).filter(([name]) => name.endsWith("_event")),
    );
    /** @type {import("@mdn/browser-compat-data").Identifier} */
    const newData = { ...interfaceData };
    for (const [eventName, eventData] of eventMembers) {
      if (eventName[0].toUpperCase() === eventName[0]) {
        // Cases like DOMContentLoaded
        continue;
      }
      const attributeName = `on${eventName.slice(0, -6)}`;

      if (!newData[attributeName]) {
        newData[attributeName] = eventData;
      }
    }
    bcdApi[interfaceName] = newData;
  }
}
