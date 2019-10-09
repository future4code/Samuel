import React from 'react';
import styled from 'styled-components';

const ContainerExtrato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export class TelaExtrato extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tipoDespesa: "",
        }
    }

    render(){
        /*const listaDespesasFiltrada = this.props.listaDeDespesas.filter((despesa)=>{
            return ""; 

        })*/
        return (<ContainerExtrato>
            <h2>Extrato:</h2>
            <input 
                type="text"
                placeholder="Valor mínimo"
            />
            <input 
                type="text"
                placeholder="Valor máximo"
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
            {/* mostrar lista de despesas e total */}
        </ContainerExtrato>
        )
    }    
}