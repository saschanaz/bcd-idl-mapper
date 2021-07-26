import api from "../index.js";
import expect from "expect";

describe("existence", () => {
  it("api.Element.webkitMatchesSelector", () => {
    expect(api.Element.webkitMatchesSelector.__compat.support).toBeDefined();
  });
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

  // TODO: api.CSSStyleDeclaration.gridGap
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
