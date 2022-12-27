import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [buttonState, setButtonState] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonState}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onClick={() => setButtonState(!buttonState)} />
    </div>
  );
}

export default App;
