import api from "../index.js";
import expect from "expect";

describe("existence", () => {
  it("api.Element.webkitMatchesSelector", () => {
    expect(api.Element.webkitMatchesSelector.__compat.support).toBeDefined();
  });
  it("api.__mixins.ParentNode", () => {
    expect(api.__mixins.ParentNode).toBeDefined();
  });
  it("api.CSSStyleDeclaration.gridTemplate", () => {
    expect(api.CSSStyleDeclaration.gridTemplate.__compat.support).toBeDefined();
  });
  it("api.CSSStyleDeclaration.wordWrap", () => {
    expect(api.CSSStyleDeclaration.wordWrap.__compat.support).toBeDefined();
  });

  // TODO: api.CSSStyleDeclaration.gridGap
});

describe("structure", () => {
  it("mixin support is a record", () => {
    expect(
      api.__mixins.ParentNode.append.Document.__compat.support
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
