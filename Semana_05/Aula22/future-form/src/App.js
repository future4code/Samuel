import React from 'react';
import styled from 'styled-components';
import EtapaUm from './Components/EtapaUm/EtapaUm';
import EtapaDois from './Components/EtapaDois/EtapaDois';
import EtapaTres from './Components/EtapaTres/EtapaTres';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BotaoEnviar = styled.button`
  width: 100px;
  margin: 20px;
  padding: 10px;
  border: 2px solid;
  border-radius: 5px;
  color: white;
  background-color: orange;
  &:active{
    background-color: blue;
  }
`

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  aoEnviarFormulario = () => {
    console.log("fui clicado");
  }

  render(){
    return (
      <Container>
        <EtapaUm />
        <EtapaDois />
        <EtapaTres />
        <BotaoEnviar onClick={this.aoEnviarFormulario}>Enviar</BotaoEnviar>
      </Container>
    );
  }
}

export default App;
