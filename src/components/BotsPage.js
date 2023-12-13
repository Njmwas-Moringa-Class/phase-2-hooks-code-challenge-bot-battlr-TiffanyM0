import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

export default function BotsPage() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBots(data);
      });
  }, []);

  const [army, setArmy] = useState([]);


  function pickBots(id) {
    let isBot = false; 
    for (const bot of bots){
      if (bot.id === id){
        isBot = true;
        break;
      }
      if (!isBot) {
        const idBot = bots.find((bot) => bot.id === id);
        setArmy([...army, idBot]);
      }
    }
  }

  const removeBot = (id) => {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== id));
  };

  const deleteBot = (id) => {
    fetch(`http://localhost:8002/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        removeBot(id);
        setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
      });
  };

  return (
    <div>
      <YourBotArmy army={army} fun={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} fun={pickBots} deleteBot={deleteBot} />
    </div>
  );
}
