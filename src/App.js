import React from 'react';
import './App.css';
import images from './testData.js';
import CardList from './CardList.js'

function App() {
  return (

    <div>
      <CardList testData={images}/>
    </div>
  );
}

export default App;
