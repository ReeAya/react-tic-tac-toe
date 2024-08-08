import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClickEvent() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className={"player-name"}>{name}</span>;
  let bthCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" value={name} required></input>;
    bthCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClickEvent}>{bthCaption}</button>
    </li>
  );
}

//  {!isEditing ? (
//     <span className={"player-name"}>{name}</span>
//   ) : (
//     <input type="text" required></input>
//   )}
