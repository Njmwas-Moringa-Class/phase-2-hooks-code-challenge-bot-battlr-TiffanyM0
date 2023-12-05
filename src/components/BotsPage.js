import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
// import BotSpecs from "./BotSpecs";

// function BotsPage() {
//   //start here with your code for step one
//   function pickBots(id){
//     const botID = id;
//     const idBot = battleBot.find((element)=> element === pickBots);
//     return console.log(botID, idBot);
//   }

//   const [army, setArmy] = useState([]);

//   function filterArmy(){
//     const clickID = battleBot.find((element)=> element === pickBots);
//     console.log(clickID);
//     return setArmy(clickID);
//   }

//   // function deleteBot(){
//   //   console.log("unalive")
//   // }

//   // function removeBot(){
//   //   console.log("remove me")
//   // }

//   return (
//     <div>
//       <YourBotArmy bots={battleBot} filterArmy={filterArmy} army={army} pickBots={pickBots}/>
//       <BotCollection bots={battleBot} pickBots={pickBots} />
//     </div>
//   );
// }

function BotsPage() {
  const [battleBot, setBattleBot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBattleBot(data);
      });
  }, []);

  const [army, setArmy] = useState([]);
  
  function pickBots(id) {
    let isBot = false; 
    for (const bot of battleBot){
      if (bot.id === id){
        isBot = true;
        break;
      }
      if (!isBot) {
        const idBot = battleBot.find((bot) => bot.id === id);
        setArmy([...army, idBot]);
      }
    }
  }

  function removeBot(id) {
    const removeArmy = army.filter((bot) => bot.id !== id);
    setArmy(removeArmy);
  }

  function deleteBot(id) {
    fetch(`http://localhost:8002/bots/${id}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => setArmy((army) => army.filter((bot) => bot.id !== id)));
    removeBot(id);
  }

  return (
    <div>
      <YourBotArmy army={army} fun={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={battleBot} fun={pickBots} />
    </div>
  );
}

export default BotsPage;
