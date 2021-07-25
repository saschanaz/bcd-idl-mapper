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
    expect(api.CSSStyleDeclaration.gridTemplate).toBeDefined();
  });
  it("api.CSSStyleDeclaration.wordWrap", () => {
    expect(api.CSSStyleDeclaration.wordWrap).toBeDefined();
    expect(api.CSSStyleDeclaration.wordWrap).toBeDefined();
  });

  // TODO: api.CSSStyleDeclaration.gridGap
});
