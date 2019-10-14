import React from 'react';
import { TelaCadastro } from './Components/TelaCadastro/TelaCadastro';
import { TelaExtrato } from './Components/TelaExtrato/TelaExtrato';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      telaAtual: "",
      listaDeDespesas: [],
    }
  }

  render(){

    const tela = (<TelaCadastro despesas={this.state.listaDeDespesas}/>)

    return (
      <div className="App">
        {tela}
      </div>
    );
  }
}

export default App;
