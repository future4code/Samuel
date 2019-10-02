import React from 'react';
import './App.css';
import { BotaoClicavel } from './Components/BotaoClicavel/BotaoClicavel';

let numCliques = 0;

function contarCliques(){
  numCliques++;
  return numCliques;
}
/* não está funcionando...  U_U   */ 
function App() {
  return (
    <div className="App">
      <BotaoClicavel numeroCliques={numCliques} onClick={contarCliques}/>
    </div>
  );
}

export default App;
