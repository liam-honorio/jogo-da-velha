import React, { useState } from 'react';
import './App.css'


import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';

import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';
import HistoryGame from './components/HistoryGame';









const App = () => {
  const [activeLayerDark, setActiveLayerDark] = useState("");
  const [activeHistoryGame, setHistoryGame] = useState("");

  const handleClickAdd= () => setActiveLayerDark("-active");
  const handleClickRemove= () => setActiveLayerDark("");

  const handleClick = () => {

    setHistoryGame((old) => old === "-active" ? "" : "-active")
}
  
  return(
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox onClick={handleClick} id="show" value="show" type="checkbox" content="Mostrar eventos" />
      
      <HistoryGame className={activeHistoryGame} />

      <LayerDark className={activeLayerDark}>
        <HeaderInternal onClick={handleClickRemove}/>

        <ProfileUser />
      </LayerDark>
      
    </main>
  );
}

export default App;
