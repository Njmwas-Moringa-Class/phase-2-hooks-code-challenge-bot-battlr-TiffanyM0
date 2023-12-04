import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [battleBot, setBattleBot] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBattleBot(data);
      });
  }, []);

  function pickBots(id){
    const botID = id;
    const idBot = battleBot.find((element)=> element === pickBots);
    return console.log(botID, idBot);
  }

  const [army, setArmy] = useState([]);

  function filterArmy(){
    const clickID = battleBot.find((element)=> element === pickBots);
    console.log(clickID);
    return setArmy(clickID);
  }

  // function deleteBot(){
  //   console.log("unalive")
  // }

  // function removeBot(){
  //   console.log("remove me")
  // }


  return (
    <div>
      <YourBotArmy bots={battleBot} filterArmy={filterArmy} army={army} pickBots={pickBots}/>
      <BotCollection bots={battleBot} pickBots={pickBots} />
    </div>
  );
}

export default BotsPage;
