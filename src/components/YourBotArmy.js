import React from "react";
import BotCard from "./BotCard";

export default function YourBotArmy({ army, fun, deleteBot }) {
  const handleDeleteBot = (id) => {
    deleteBot(id);
    fun(id);
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              fun={fun}
              deleteBot={handleDeleteBot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
