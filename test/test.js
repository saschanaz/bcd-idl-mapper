import api from "../index.js";
import { expect } from "expect";

describe("existence", () => {
  it("api.__mixins.ParentNode", () => {
    expect(
      api.__mixins.ParentNode.append.Document.__compat.support,
    ).toBeDefined();
  });
  it("api.CSSStyleProperties.gridTemplate", () => {
    expect(api.CSSStyleProperties.gridTemplate.__compat.support).toBeDefined();
  });
  it("api.CSSStyleProperties.wordWrap", () => {
    expect(api.CSSStyleProperties.wordWrap.__compat.support).toBeDefined();
  });
});

describe("alternative name", () => {
  it("api.Element.webkitMatchesSelector", () => {
    expect(api.Element.webkitMatchesSelector.__compat.support).toBeDefined();
    expect(
      api.Element.webkitMatchesSelector.__compat.support.chrome
        .alternative_name,
    ).not.toBeDefined();
    expect(
      api.Element.webkitMatchesSelector.__compat.status.preferred_name,
    ).toBeDefined();
    expect(
      api.Element.matches.__compat.support.chrome[1].alternative_name,
    ).toBeDefined();
  });

  // uses prefix
  it("api.CSSStyleProperties.webkitPerspective", () => {
    expect(
      api.CSSStyleProperties.webkitPerspective.__compat.support,
    ).toBeDefined();
  });

  // no direct __compat object
  it("api.CSSStyleProperties.webkitJustifyContent", () => {
    expect(
      api.CSSStyleProperties.webkitJustifyContent.__compat.support,
    ).toBeDefined();
  });

  it("api.__mixins.GlobalEventHandlers.onwebkitanimationend", () => {
    expect(
      api.__mixins.GlobalEventHandlers.onwebkitanimationend.Element.__compat
        .support,
    ).toBeDefined();
  });
  it("api.__mixins.GlobalEventHandlers.onwebkittransitionend", () => {
    expect(
      api.__mixins.GlobalEventHandlers.onwebkittransitionend.Element.__compat
        .support,
    ).toBeDefined();
  });
});

describe("merging partial mixins", () => {
  it("api.__mixins.DocumentOrShadowRoot.activeElement", () => {
    expect(
      api.__mixins.DocumentOrShadowRoot.activeElement.Document.__compat.support,
    ).toBeDefined();
  });
  it("api.__mixins.DocumentOrShadowRoot.getAnimations", () => {
    expect(
      api.__mixins.DocumentOrShadowRoot.getAnimations.Document.__compat.support,
    ).toBeDefined();
  });
  it("api.__mixins.NavigatorID.appCodeName", () => {
    expect(
      api.__mixins.NavigatorID.appCodeName.Navigator.__compat.support,
    ).toBeDefined();
  });
  it("api.__mixins.NavigatorID.oscpu", () => {
    expect(
      api.__mixins.NavigatorID.oscpu.Navigator.__compat.support,
    ).toBeDefined();
  });
});

describe("copying mixin from api", () => {
  it("api.__mixins.GlobalEventHandlers.onabort", () => {
    expect(
      api.__mixins.GlobalEventHandlers.onabort.HTMLMediaElement.__compat
        .support,
    ).toBeDefined();
  });
  it("api.__mixins.GlobalEventHandlers.onselectstart", () => {
    expect(
      api.__mixins.GlobalEventHandlers.onselectstart.Node.__compat.support,
    ).toBeDefined();
  });
  it("api.__mixins.WindowEventHandlers.ongamepadconnected", () => {
    expect(
      api.__mixins.WindowEventHandlers.ongamepadconnected.Window.__compat
        .support,
    ).toBeDefined();
  });
  it("api.__mixins.GlobalEventHandlers.oncopy", () => {
    expect(
      api.__mixins.GlobalEventHandlers.oncopy.Element.__compat.support,
    ).toBeDefined();
  });
});

describe("globals", () => {
  it("api.__mixins.WindowOrWorkerGlobalScope.isSecureContext", () => {
    expect(
      api.__mixins.WindowOrWorkerGlobalScope.isSecureContext.Window.__compat
        .support,
    ).toBeDefined();
    expect(
      api.__mixins.WindowOrWorkerGlobalScope.isSecureContext.WorkerGlobalScope
        .__compat.support,
    ).toBeDefined();
  });
});

describe("original data", () => {
  it("api.DOMException", () => {
    expect(api.DOMException.__compat.support).toBeDefined();
  });
  it("api.CSSStyleProperties.overflowWrap", () => {
    expect(api.CSSStyleProperties.overflowWrap.__compat.support).toBeDefined();
  });
  it("api.Event", () => {
    expect(api.Event.__compat.support).toBeDefined();
  });
});

describe("js data", () => {
  it("api.WebAssembly.compileStreaming", () => {
    expect(
      api.WebAssembly.compileStreaming_static.__compat.support,
    ).toBeDefined();
  });
  it("api.WebAssembly.Module.exports", () => {
    expect(
      api.WebAssembly.Module.exports_static.__compat.support,
    ).toBeDefined();
  });
});

describe("multiple context", () => {
  it("api.CSSStyleProperties.gridGap", () => {
    expect(api.CSSStyleProperties.gridGap.__compat.support).toBeDefined();
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
