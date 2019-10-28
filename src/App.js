import React, { useState } from 'react';
import './App.css'


import InputCheckbox from './objects/InputCheckbox';
import LayerDark from './objects/LayerDark';

import HeaderGame from './components/HeaderGame';
import HashtagGame from './components/HashtagGame';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';








const App = () => {
  let [activeLayerDark, setActiveLayerDark] = useState(""); 
  const handleClickAdd= () => setActiveLayerDark("-active");
  const handleClickRemove= () => setActiveLayerDark("");
  
  return(
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox id="show" value="show" type="checkbox" content="Mostrar eventos" />
      
      <LayerDark className={activeLayerDark}>
        <HeaderInternal onClick={handleClickRemove}/>

        <ProfileUser />
      </LayerDark>
      
    </main>
  );
}

export default App;
