import logo from "./assets/logo.svg";
import "./assets/App.css";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Input from './components/Input';
import './assets/all.scss'

function App() {
  const [state, setState] = useState();
  const [text, setText] = useState("text");

  useEffect(() => {
    (async () => {
      console.log(process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH
      const result = await axios.get(path);
      console.log(result);
    })();
  }, []);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {state}
        <button
          type="button"
          onClick={() => {
            state ? setState(0) : setState(1);
          }}
        >
          setState
        </button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <Input
          id="sampleText"
          text="這是一個 input"
          value={text}
          onChangeHandler={onChangeHandler}
        />
      </header>

      <Footer text={text} />
    </div>
  );
}

export default App;
