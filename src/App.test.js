import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

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
  expect(colorButton).not.toBeEnabled();

  // check that button is enabled and checkbox unchecked
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});
