import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiTerm /*parameter*/=> (
            <Card
              key={emojiTerm.id}
              name={emojiTerm.name}
              emoji={emojiTerm.emoji}
              description={emojiTerm.meaning}
            />
        ))}
      </dl>
    </div>
  );
}

export default App;
