import { useState } from "react";

export const HomePage = () => {
  const [ourText, setOurText] = useState("");
  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (msg) => {
    msg.text = ourText;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div>
      <h1>This is a HomePage</h1>

      <input
        type="text"
        value={ourText}
        placeholder="Enter Text"
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK</button>
    </div>
  );
};
