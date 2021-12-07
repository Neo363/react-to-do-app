import logo from "../logo.svg";
import "../App.css";
import { useState } from "react";
import Another from "../Another";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Another name="Niraj" />
        <div>
          <span>{count}</span>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {true && <p>{3 + 2}</p>}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
