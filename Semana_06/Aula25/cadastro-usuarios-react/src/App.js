import React from 'react';
import styled from 'styled-components';
import Formulario from './Components/Formulario';

const BigContainer = styled.div`
  
`

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listaDeUsuarios: [ //preenchida manualmente, por ora, só pra testar o acesso
        {
          name: "Samuel",
          email: "squoliver@gmail.com"
        },
        {
          name: "Fabiana",
          email: "frodrigues37@hotmail.com"
        }
      ],
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

  verLista = ()=>{
    const mostrarListaDeUsuarios = !this.state.mostraUsuarios
    this.setState({mostraUsuarios : mostrarListaDeUsuarios})
  }  

  render(){

    const listaGeral = this.state.listaDeUsuarios.map((usuario)=>{
      return <p>Nome: {usuario.name} - E-mail: {usuario.email}</p> //teste se retorna/acessa a lista de usuarios que ira ter
    });

    const tela = this.state.mostraUsuarios? 
      <div>{listaGeral}</div> :
      <Formulario 
        listaDeUsuarios={this.state.listaDeUsuarios} 
        cadastrarUsuario={this.cadastrarUsuario}
      />

    return (
      <BigContainer>
        <button onClick={this.verLista}>{this.state.mostraUsuarios?"Cadastrar um novo usuário":"Ver lista de usuários"}</button>
        <hr/>
        {tela}
      </BigContainer>
    );
  }
}

export default App;