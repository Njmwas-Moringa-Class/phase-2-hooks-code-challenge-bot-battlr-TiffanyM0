import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection() {
  // Your code here
  // See profiles of all bots rendered in BotCollection.
  
  const [battleBot, setBattleBot] = useState([]);

  useEffect(()=>{
    fetch ("http://localhost:8002/bots")
    .then ((resp)=>resp.json())
    .then((data)=>{
      setBattleBot(data)
    })
  }, []);
  // console.log(battleBot)
  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Collection of all bots */}
        {battleBot.map((bot)=> <BotCard key={bot.id} bot={bot}/>)}
      </div>
    </div>
  );
}

export default BotCollection;
