import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

import { replaceCamelCaseWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  // check  that the button starts enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check the checkbox starts uncheked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("disabled button when checkbox is cheked", () => {
  render(<App />);
  // click checkbox and the checkbox is checked
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // check that the button is disabled and checkbox is checked
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  // check that button is enabled and checkbox unchecked
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test("complete gray -> blue -> red button flow", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // the button should be gray after checkbox is checked
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // the button should be red after checkbox is unchecked
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toHaveStyle({ backgroundColor: "red" });

  // the button should be blue after button is clicked
  fireEvent.click(button);
  expect(checkbox).not.toBeChecked();
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});

describe("color names", () => {
  test("no capital letters", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });
  test("one capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("multiple capital letters", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
