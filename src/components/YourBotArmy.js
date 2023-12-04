import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, pickBots, filterArmy}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row" >
          {/*...and here...*/}
          Your Bot Army
          <BotCard bot={filterArmy} pickBots={pickBots}/>
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
