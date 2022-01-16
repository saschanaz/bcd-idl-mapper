/**
 * @param {import("@mdn/browser-compat-data/types").PrimaryIdentifier} bcdApi
 * @return {import("@mdn/browser-compat-data/types").PrimaryIdentifier}
 */
export default function resolve(bcdApi) {
  for (const [interfaceName, interfaceData] of Object.entries(bcdApi)) {
    const eventMembers = new Map(
      Object.entries(interfaceData).filter(([name]) => name.endsWith("_event"))
    );
    for (const [eventName, eventData] of eventMembers) {
      if (eventName[0].toUpperCase() === eventName[0]) {
        // Cases like DOMContentLoaded
        continue;
      }
      const attributeName = `on${eventName.slice(0, -6)}`;

      if (!interfaceData[attributeName]) {
        if (!bcdApi[interfaceName]) {
          bcdApi[interfaceName] = { ...interfaceData };
        }
        bcdApi[interfaceName][attributeName] = eventData;
      }
    }
  }
}
