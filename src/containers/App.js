import React, { useState } from "react";
import TextEditor from "../components/textEditor/TextEditor";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div className="app">
      <div className="textarea-holder">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
      </div>
      <TextEditor text={text} />
    </div>
  );
};

export default App;
