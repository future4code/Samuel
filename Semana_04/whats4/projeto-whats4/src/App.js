import React from 'react';
import styled from 'styled-components';
import { Mensagem } from './Components/Mensagem/Mensagem';
import Entrada from './Components/Entrada/Entrada';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  min-height: 100vh;
  background-color: beige;
  width: 600px;
  margin: 0 auto;
  border-left: 1px solid black;
  border-right: 1px solid black;
`

const ContainerMensagens = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 10px;
  justify-content: flex-end;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      listaMensagem: [],
    }
  }

  adicionarMensagemNaLista = (novaMensagem) => {
    const novaListaMensagens = [...this.state.listaMensagem];
    novaListaMensagens.push(novaMensagem);
    this.setState({listaMensagem: novaListaMensagens});
  }

  render(){

    const minhaListaMensagens = this.state.listaMensagem.map((element)=> {
      return (
        <Mensagem 
          nomeUsuario={element.nomeUsuario} 
          texto={element.texto} 
        />
      )
    })

    return (
      <BigContainer>
        <ContainerMensagens>
          {minhaListaMensagens}
        </ContainerMensagens>
        <Entrada minhaNovaMensagem={this.adicionarMensagemNaLista}/>
      </BigContainer>
    );
 }
}

export default App;