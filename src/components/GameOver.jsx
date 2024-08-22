export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>Player {winner} won!</p>}
      {!winner && <p>Draw!</p>}

      <p>
        <button onClick={onRematch}>Play Again?</button>{" "}
      </p>
    </div>
  );
}
