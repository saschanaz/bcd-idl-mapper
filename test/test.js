import api from "../index.js";
import expect from "expect";

describe("existence", () => {
  it("api.Element.webkitMatchesSelector", () => {
    expect(api.Element.webkitMatchesSelector).toBeDefined();
    expect(api.Element.webkitMatchesSelector.__compat.support).toBeDefined();
  });
  it("api.__mixins.ParentNode", () => {
    expect(api.__mixins.ParentNode).toBeDefined();
    expect(api.__mixins.ParentNode.__compat.support).toBeDefined();
  });
  it("api.CSSStyleDeclaration.gridTemplate", () => {
    expect(api.CSSStyleDeclaration.gridTemplate).toBeDefined();
    expect(api.CSSStyleDeclaration.gridTemplate.__compat.support).toBeDefined();
  });
  it("api.CSSStyleDeclaration.wordWrap", () => {
    expect(api.CSSStyleDeclaration.wordWrap).toBeDefined();
    expect(api.CSSStyleDeclaration.wordWrap.__compat.support).toBeDefined();
  });

  // TODO: api.CSSStyleDeclaration.gridGap
});

describe("original data", () => {
  it("api.DOMException", () => {
    expect(api.DOMException).toBeDefined();
    expect(api.DOMException.__compat.support).toBeDefined();
  });
  it("api.CSSStyleDeclaration.overflowWrap", () => {
    expect(api.CSSStyleDeclaration.overflowWrap).toBeDefined();
    expect(api.CSSStyleDeclaration.overflowWrap.__compat.support).toBeDefined();
  });
  it("api.Event", () => {
    expect(api.Event).toBeDefined();
    expect(api.Event.__compat.support).toBeDefined();
  });
});
