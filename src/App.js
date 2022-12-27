import { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonState, setButtonState] = useState(false);
  const [buttonText, setButtonText] = useState("blue");

  const onHandleClickCheckbox = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setButtonState(true);
      setButtonColor("gray");
      setButtonText("blue");
    } else {
      setButtonState(false);
      setButtonColor("red");
      setButtonText("blue");
    }
  };

  const onHandleClickButton = () => {
    if (buttonText === "blue") {
      setButtonColor("blue");
      setButtonText("red");
    } else {
      setButtonColor("red");
      setButtonText("blue");
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={onHandleClickButton}
        disabled={buttonState}
      >
        Change to {buttonText}
      </button>
      <input
        type="checkbox"
        onClick={onHandleClickCheckbox}
        id="disabled-button-checkbox"
      />
      <label htmlFor="disabled-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
