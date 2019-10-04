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
  }

  render(){
    return (
      <BigContainer>
        <ContainerMensagens>
          {/* só a título de teste, coloquei os inputs 'na mão' mesmo: */}
          <Mensagem nomeUsuario="Nome-do-Usuário" texto="Blablabla" />
          <Mensagem nomeUsuario="Nome-do-Usuário" texto="Blablabla" />
          <Mensagem nomeUsuario="Nome-do-Usuário" texto="Blablabla" />
          <Mensagem nomeUsuario="Nome-do-Usuário" texto="Blablabla" />
        </ContainerMensagens>      
        <Entrada />
      </BigContainer>
    );
 }
}

export default App;