import React, { useState } from 'react';
import './App.css'


import Checkbox from './objects/Checkbox';
import LayerDark from './objects/LayerDark';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';








const App = () => {
  let [activeLayerDark, setActiveLayerDark] = useState(""); 
  const handleClickAdd= () => setActiveLayerDark("-active");
  const handleClickRemove= () => setActiveLayerDark("");
  
  return(
    <main className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <Checkbox id="show" value="show" type="checkbox" content="Mostrar eventos" />
      
      <LayerDark className={activeLayerDark}>
        <HeaderInternal onClick={handleClickRemove}/>

        <ProfileUser />
      </LayerDark>
      
    </main>
  );
}

export default App;
