import React from 'react';
import { TelaCadastro } from './Components/TelaCadastro/TelaCadastro';
import { TelaExtrato } from './Components/TelaExtrato/TelaExtrato';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      telaAtual: (<TelaCadastro />),
      listaDeDespesas: []
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.telaAtual}
      </div>
    );
  }
}

export default App;
