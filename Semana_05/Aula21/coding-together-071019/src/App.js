import React from 'react';
import './App.css';
import Hello from './Components/Hello/Hello';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      deveMostrarComponenteB: false
    };
  }

  aoClicarBotao = () => {
    const valorAtualDeDeveMostrar = this.state.deveMostrarComponenteB;

    this.setState({deveMostrarComponenteB: !valorAtualDeDeveMostrar});
  }

  render(){
    let conteudo;

    if(this.state.deveMostrarComponenteB){
      conteudo = (<Hello />)
    }

    return (
      <div>
        <h3>Oi, eu sou o componente A!</h3>
        <button onClick = {this.aoClicarBotao}>Mostrar/Esconder o componente B</button>
        <hr/>
        { conteudo }
      </div>
    );
  }
}

export default App;
