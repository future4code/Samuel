import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Formulario from './Components/Formulario';
import Usuario from './Components/Usuario';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BotaoVerLista = styled.button`
  margin: 10px;
  height: 30px;
  width: 25%;
  background-color: white;
  padding: 5px;
  border: 2px solid orange;
  border-radius: 8px;
  font-size: 12pt;
  transition-duration: 0.25s;
  &:hover {
    background-color: orange;        
    color: white;
  }
  &:active{
    background-color: red;
    border: 2px solid red;
  }
  &:focus {
    outline: none;
  }
`

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listaDeUsuarios: [],
      verCadastrados: false,
    }
  }
  
  componentDidMount() {
    this.getListaDeUsuarios();    
  }
  
  getListaDeUsuarios = () =>{
    const request = axios.get('https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers',
      {
        headers: {
          "api-token": "3cfdfe6d73fbb3b3bd84bba5f16098c9"
        }
      }
    );

    request.then((response) => {
      this.setState({ listaDeUsuarios: response.data.result });
    }
    ).catch((error) => {
        console.log(error.message);
        this.setState({ listaDeUsuarios: [] });
    });
  }
  
  cadastrarUsuario = (novoNome, novoEmail) => {
    const data = {
      name: novoNome,
      email: novoEmail
    }

    const request = axios.post('https://us-central1-future4-users.cloudfunctions.net/api/users/createUser', data, {
      headers: {
        'api-token': '3cfdfe6d73fbb3b3bd84bba5f16098c9'
      }
    })

    request.then(() => {
      window.alert("Usuário criado com sucesso!");
      this.getListaDeUsuarios();
    }).catch((error) =>{
      console.log(error.message);
    })
  }

  excluirUsuario = (id) => {
    const request = axios.delete(`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}`,{
      headers: {
        'api-token': '3cfdfe6d73fbb3b3bd84bba5f16098c9'
      }
    });

    request.then(()=>{
      window.alert("Usuário excluído com sucesso!");
      this.getListaDeUsuarios();
    }).catch((error)=>{
      console.log(error.message);
      this.getListaDeUsuarios();
    })
  }

  verLista = ()=>{
    const mostrarListaDeUsuarios = !this.state.verCadastrados
    this.setState({verCadastrados : mostrarListaDeUsuarios})
    this.getListaDeUsuarios();
  }  

  render(){

    const listaGeral = this.state.listaDeUsuarios.map((usuario, i)=>{
      return (
        <Usuario nome={usuario.name} key={i} id={usuario.id} excluirUsuario={this.excluirUsuario}/>
      )
    });

    const tela = this.state.verCadastrados? 
      <div>
        <h3>Usuários Cadastrados:</h3>
        {listaGeral}
      </div> :
      <Formulario listaDeUsuarios={this.state.listaDeUsuarios} cadastrarUsuario={this.cadastrarUsuario}/>

    return (
      <BigContainer>
        <BotaoVerLista onClick={this.verLista}>{this.state.verCadastrados ? "Voltar ao cadastro" : "Ver lista de usuários"}</BotaoVerLista>
        {tela}
      </BigContainer>
    );
  }
}

export default App;