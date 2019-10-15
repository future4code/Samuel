import React from 'react';
import styled from 'styled-components';
import Formulario from './Components/Formulario';

const BigContainer = styled.div`
  
`

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listaDeUsuarios: [],
      mostraUsuarios: false
    }
  }

  cadastrarUsuario = (nome, email) => {
    console.log("fui clicado"); //teste de captura do click - OK!
    console.log(nome, email); // teste de acesso aos dados - OK!
    //inserir lógica de adição de usuário aqui
    
  }

  exibirTodosOsUsuarios(){
    //criar componentes do tipo 'Usuario' com cada um dos itens do array 'listaDeUsuarios' com o map e mostrar!
  }

  render(){

    const tela = this.state.mostraUsuarios? 
      <div>{this.state.listaUsuarios}</div> :
      <Formulario listaDeUsuarios={this.state.listaDeUsuarios} cadastrarUsuario={this.cadastrarUsuario}/>

    return (
      <div>
        <button>Usuários Cadastrados</button>
        <hr/>
        {tela}
      </div>
    );
  }
}

export default App;