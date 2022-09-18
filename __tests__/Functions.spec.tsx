import { describe, expect, it } from "vitest";
import {
  activateSearchElements,
  getSearchElements,
} from "../helpers/functions";

describe("activateSearchElements()", () => {  
    it("should render a divElement", () => {
    const divElement = document.createElement("div");

    expect(divElement).toBeDefined();
    
    expect(divElement.className).not.toContain("active");
  });

  it("should toggle active class of divElement", () => {
    const divElement = document.createElement("div");

    activateSearchElements(divElement);

    expect(divElement.className).toContain("active");
  });
});

describe("getSearchElements()", () => {
  it("should return search and input", () => {
    const divElement = document.createElement("div");

    divElement.classList.add("search");

    const inputElement = document.createElement("input");

    document.body.appendChild(divElement);
    document.body.appendChild(inputElement);

    const { search, input } = getSearchElements();

    expect(search).toBe(divElement);
    expect(input).toBe(inputElement);
  });
});
