import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

export default function BotCollection({ bots, fun, deleteBot }) {
  const [botsCollect, setBotsCollect] = useState([]);

  useEffect(() => {
    setBotsCollect(bots);
  }, [bots]);

  const handleDeleteBot = (id) => {
    setBotsCollect((prevBots) => prevBots.filter((bot) => bot.id !== id));
    deleteBot(id);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {botsCollect.map((bot) => (
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
