import { expect, test } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Home from "../pages";

test("home", () => {
  render(<Home />);

  const main = within(screen.getByRole("main"));

  /**expect a heading defined */
  expect(
    main.getByRole("heading", { level: 1, name: /hidden/i })
  ).toBeDefined();

  const input = main.getByPlaceholderText("Search...");

  const inputCssText = window.getComputedStyle(input).cssText;

  /**expect input outline isn't active */
  expect(inputCssText.includes("outline")).toBeFalsy();

  const button = main.getByRole("button") as HTMLButtonElement;

  /**click event on the button leading to the outline activation of the input */
  fireEvent.click(button);

  const clickedInputCssText = window.getComputedStyle(input).cssText;

  /**expect input outline is active */
  expect(clickedInputCssText.includes("outline")).toBeTruthy();
});
