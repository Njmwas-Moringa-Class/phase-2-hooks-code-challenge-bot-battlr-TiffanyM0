import React from "react";
import BotCard from "./BotCard";

// function YourBotArmy({ army, removeBot, deleteBot }) {
//   console.log(army);
//   return (
//     <div className="ui segment inverted olive bot-army">
//       <div className="ui five column grid">
//         <div className="row bot-army-row">
//           {<BotCard
//               key={army.id}
//               bot={army}
//               removeBot={() => removeBot(army.id)}
//               deleteBot={() => deleteBot(army.id)}
//             />
//           }
//         </div>
//       </div>
//     </div>
//   );
// }


function YourBotArmy({ army, fun, deleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* Map through the army and render BotCard for each bot */}
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              fun={fun}
              deleteBot={deleteBot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default YourBotArmy;
