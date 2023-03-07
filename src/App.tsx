import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import RSC from "./components/RSC";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RSC />
    </>
  );
}

export default App;
