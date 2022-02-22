import React, { useState } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [advice, setAdvice] = useState("");

  const useApi = async () => {
    const API = "https://api.adviceslip.com/advice";
    const response = await fetch(API);
    const data = await response.json();
    setId(data.slip.id);
    setAdvice(data.slip.advice);
  };

  return (
    <div className="App">
      <div className="Container">
        <h2 className="Title">{`ADVICE #${id || ""}`}</h2>
        <div className="Text-container">
          <p className="Text">{advice}</p>
        </div>
        <img
          onClick={useApi}
          className="Button"
          src="https://icongr.am/fontawesome/random.svg?size=20&color=currentColor"
        />
      </div>
    </div>
  );
}

export default App;
