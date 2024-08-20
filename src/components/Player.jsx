import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEditClickEvent() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  let playerName = <span className={"player-name"}>{name}</span>;
  let bthCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" value={name} onChange={handleChange} required></input>
    );
    bthCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
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
