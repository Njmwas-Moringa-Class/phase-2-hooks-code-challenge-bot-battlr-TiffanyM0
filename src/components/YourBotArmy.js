import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeBot, deleteBot }) {
  console.log(army);
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {<BotCard
              key={army.id}
              bot={army}
              removeBot={() => removeBot(army.id)}
              deleteBot={() => deleteBot(army.id)}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
