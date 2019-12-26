import React from "react";
import { useState } from "react";
import InputCheckbox from "../../objects/InputCheckbox";
import HistoryGame from "../../components/HistoryGame";
import HashtagGame from "../../components/HashtagGame";

const WrapperHashtagHistory = () => {
  const [history, setHistory] = useState(["Start"]);
  const [active, setActive] = useState(false);
  const addHistory = player =>
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  const showHideHistory = () => {
    setActive(old => !!!old);
  };
  const changeHistory = key => {
    setHistory(old => old.slice(0, key + 1));
  };

  return (
    <div className={`wrapper-hashtagHistory ${active && "-active"}`}>
      <HashtagGame callback={addHistory} />

      <InputCheckbox
        onClick={showHideHistory}
        id="show"
        value="show"
        type="checkbox"
        content="Mostrar eventos"
      />

      <HistoryGame history={history} onClick={changeHistory} />
    </div>
  );
};

export default WrapperHashtagHistory;
