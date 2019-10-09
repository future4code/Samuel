import React from 'react';
import styled from 'styled-components';

const ContainerDespesa = styled.div`
    display: flex;
    flex-direction: column;
`
export class Despesa extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            valor: "",
            tipo: "",
            descricao: ""
        }
    }

    aoMudarValor = (event) => {
        this.setState({valor: event.target.value});
    }
    aoMudarTipo = (event) => {
        this.setState({tipo: event.target.value});
    }
    aoMudarDescricao = (event) => {
        this.setState({descricao: event.target.value});
    }
    
    render(){
        return (
            <ContainerDespesa>
                <input 
                    type="text" 
                    placeholder="Digite o valor"
                    value={this.state.valor}
                    onChange={this.aoMudarValor}
                />
                <select value={this.state.tipo} onChange={this.aoMudarTipo}>
                    <option value="" disabled="disabled" selected="selected">Tipo de Despesa</option>
                    <option value="comida">Alimentação</option>
                    <option value="casa">Casa</option>
                    <option value="lazer">Lazer</option>
                    <option value="saude">Saúde</option>
                    <option value="transporte">Transporte</option>
                    <option value="roupa">Vestuário</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Descrição"
                    value={this.state.descricao}
                    onChange={this.aoMudarDescricao}
                />
            </ContainerDespesa>
        )
    }
}