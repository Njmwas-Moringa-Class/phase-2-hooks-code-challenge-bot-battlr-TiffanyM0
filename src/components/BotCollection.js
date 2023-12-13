import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

export default function BotCollection({ bots, fun, deleteBot, onBotDelete }) {
  const [collectionBots, setCollectionBots] = useState([]);

  useEffect(() => {
    setCollectionBots(bots);
  }, [bots]);

  const handleDeleteBot = (id) => {
    setCollectionBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
    deleteBot(id);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {collectionBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            fun={fun}
            deleteBot={handleDeleteBot}
          />
        ))}
      </div>
    </div>
  );
}
