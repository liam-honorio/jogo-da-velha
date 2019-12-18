import React from "react";
import "./styles.css";
import TagGame from "../../objects/TagGame";

const changeHistory = () => console.log("clicou");

const HistoryGame = ({ history }) => (
  <ol className="history-game">
    {history.map((content, key) => (
      <li key={key} className="action" onClick={changeHistory}>
        <TagGame className="action" content={content} />
      </li>
    ))}
  </ol>
);

export default HistoryGame;
