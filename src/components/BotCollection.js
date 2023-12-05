import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, fun}) {
  // Your code here
  // See profiles of all bots rendered in BotCollection.
  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Collection of all bots */}
        {bots.map((bot)=> <BotCard key={bot.id} bot={bot} fun={fun}/>)}
      </div>
    </div>
  );
}

export default BotCollection;
