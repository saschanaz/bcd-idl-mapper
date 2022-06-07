import api from "../index.js";
import { expect } from "expect";

describe("existence", () => {
  it("api.__mixins.ParentNode", () => {
    expect(
      api.__mixins.ParentNode.append.Document.__compat.support
    ).toBeDefined();
  });
  it("api.CSSStyleDeclaration.gridTemplate", () => {
    expect(api.CSSStyleDeclaration.gridTemplate.__compat.support).toBeDefined();
  });
  it("api.CSSStyleDeclaration.wordWrap", () => {
    expect(api.CSSStyleDeclaration.wordWrap.__compat.support).toBeDefined();
  });
});

describe("alternative name", () => {
  it("api.Element.webkitMatchesSelector", () => {
    expect(api.Element.webkitMatchesSelector.__compat.support).toBeDefined();
    expect(
      api.Element.webkitMatchesSelector.__compat.support.chrome.alternative_name
    ).not.toBeDefined();
    expect(
      api.Element.webkitMatchesSelector.__compat.status.preferred_name
    ).toBeDefined();
    expect(
      api.Element.matches.__compat.support.chrome[1].alternative_name
    ).toBeDefined();
  });

  // uses prefix
  it("api.CSSStyleDeclaration.webkitPerspective", () => {
    expect(
      api.CSSStyleDeclaration.webkitPerspective.__compat.support
    ).toBeDefined();
  });

  // no direct __compat object
  it("api.CSSStyleDeclaration.webkitJustifyContent", () => {
    expect(
      api.CSSStyleDeclaration.webkitJustifyContent.__compat.support
    ).toBeDefined();
  });

  it("api.__mixins.GlobalEventHandlers.onwebkitanimationend", () => {
    expect(
      api.__mixins.GlobalEventHandlers.onwebkitanimationend.__compat.support
    ).toBeDefined();
  });
});

describe("merging partial mixins", () => {
  it("api.__mixins.DocumentOrShadowRoot.activeElement", () => {
    expect(
      api.__mixins.DocumentOrShadowRoot.activeElement.Document.__compat.support
    ).toBeDefined();
  });
  it("api.__mixins.DocumentOrShadowRoot.getAnimations", () => {
    expect(
      api.__mixins.DocumentOrShadowRoot.getAnimations.Document.__compat.support
    ).toBeDefined();
  });
  it("api.__mixins.NavigatorID.appCodeName", () => {
    expect(
      api.__mixins.NavigatorID.appCodeName.Navigator.__compat.support
    ).toBeDefined();
  });
  it("api.__mixins.NavigatorID.oscpu", () => {
    expect(
      api.__mixins.NavigatorID.oscpu.Navigator.__compat.support
    ).toBeDefined();
  });
});

// This will be changed after https://github.com/mdn/browser-compat-data/pull/11518
describe("copying mixin from api", () => {
  it("api.__mixins.GlobalEventHandlers.onabort", () => {
    expect(
      api.__mixins.GlobalEventHandlers.onabort.__compat.support
    ).toBeDefined();
  });
  it("api.__mixins.WindowEventHandlers.ongamepadconnected", () => {
    expect(
      api.__mixins.WindowEventHandlers.ongamepadconnected.Window.__compat
        .support
    ).toBeDefined();
  });
});

describe("globals", () => {
  it("api.__mixins.WindowOrWorkerGlobalScope.isSecureContext", () => {
    expect(
      api.__mixins.WindowOrWorkerGlobalScope.isSecureContext.Window.__compat
        .support
    ).toBeDefined();
    expect(
      api.__mixins.WindowOrWorkerGlobalScope.isSecureContext.WorkerGlobalScope
        .__compat.support
    ).toBeDefined();
  });
});

describe("original data", () => {
  it("api.DOMException", () => {
    expect(api.DOMException.__compat.support).toBeDefined();
  });
  it("api.CSSStyleDeclaration.overflowWrap", () => {
    expect(api.CSSStyleDeclaration.overflowWrap.__compat.support).toBeDefined();
  });
  it("api.Event", () => {
    expect(api.Event.__compat.support).toBeDefined();
  });
});

describe("js data", () => {
  it("api.WebAssembly.compileStreaming", () => {
    expect(api.WebAssembly.compileStreaming.__compat.support).toBeDefined();
  });
  it("api.WebAssembly.Module.exports", () => {
    expect(api.WebAssembly.Module.exports.__compat.support).toBeDefined();
  });
});

describe("multiple context", () => {
  it("api.CSSStyleDeclaration.gridGap", () => {
    expect(api.CSSStyleDeclaration.gridGap.__compat.support).toBeDefined();
  });
});

describe("event attributes", () => {
  it("api.VisualViewport.onresize", () => {
    expect(api.VisualViewport.onresize.__compat.support).toBeDefined();
  });
  it("api.WebSocket.onerror", () => {
    expect(api.WebSocket.onerror.__compat.support).toBeDefined();
  });
});
