import React from "react";
import Emojis from "../emojipedia";
import Card from "./Card";

function renderDictionary(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      name={emojiTerm.name}
      emoji={emojiTerm.emoji}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojis.map(renderDictionary)}</dl>
    </div>
  );
}

export default App;
