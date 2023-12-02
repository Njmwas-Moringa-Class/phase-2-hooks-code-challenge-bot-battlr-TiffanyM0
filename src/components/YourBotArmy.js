import React from "react";
// import BotCollection from "./BotCollection";

function YourBotArmy() {
  //your bot army code here...

  // Add an individual bot to my army by clicking on it. The selected bot should render in the YourBotArmy component.
  // The bot can be enlisted only once. The bot does not disappear from the BotCollection.
// the child botcollection passes bots to the parent, key{bot.id} can only go up once

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
