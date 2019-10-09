import React from 'react';
import styled from 'styled-components';
import {Tarefa} from './Components/Tarefa/Tarefa';

const BigContainer = styled.div`
  width: 30%;
  margin: 100px auto;
  background-color: beige;  
`

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 25px;
`

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listaTarefas: [],
    }
  }

  criarCampoTexto = () => {
    console.log("fui clicado");

    //criando a nova tarefa:
    const novaTarefa = {
      descricao: "teste", //???
      feita: false
    }

    //atualizando a lista com a nova tarefa:
    const listaAtualizada = this.state.listaTarefas;
    listaAtualizada.push(novaTarefa);
    this.setState({listaTarefas: listaAtualizada});
  }

  render(){

    const completas = this.state.listaTarefas.filter((elem) => {
      return (elem.feita === true);
    });

    const incompletas = this.state.listaTarefas.filter((elem) => {
      return (elem.feita === false);
    });

    return (
      <BigContainer>
        <p>TAREFAS</p>
        <Cabecalho>
          <span>A fazer:</span>
          <button onClick={this.criarCampoTexto}>+</button>
        </Cabecalho>
        <ul>
          {completas}
          {<Tarefa descTarefa={"teste"}></Tarefa>}
        </ul>
        <Cabecalho>
          <span>Feitas:</span>
        </Cabecalho>
        <ul>
          {incompletas}
        </ul>
      </BigContainer>
    );
  }
}

export default App;