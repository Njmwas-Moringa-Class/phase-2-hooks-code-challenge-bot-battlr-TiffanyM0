import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

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
    // Ensure that the bot is not already enlisted
    if (!army.some((bot) => bot.id === id)) {
      // Find the selected bot from the battleBot array
      const selectedBot = battleBot.find((bot) => bot.id === id);

      // Update the army state with the selected bot
      setArmy((prevArmy) => [...prevArmy, selectedBot]);
    }
  }

  function removeBot(id) {
    // Filter out the bot with the given id from the army
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy);
  }

  function deleteBot(id) {
    // You should implement the logic to delete the bot from the backend
    // For now, let's just log a message
    console.log(`Deleting bot with id ${id} from backend`);

    // Remove the bot from the frontend army
    removeBot(id);
  }

  return (
    <div>
      <YourBotArmy army={army} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={battleBot} pickBots={pickBots} />
    </div>
  );
}

export default BotsPage;
