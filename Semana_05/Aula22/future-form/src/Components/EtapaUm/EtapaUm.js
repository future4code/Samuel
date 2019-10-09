import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
`

const TituloEtapa = styled.p`
    margin-top: 50px;
    font-weight: bold;
`

const NomeCampo = styled.label`
    margin-top: 10px;
    margin-bottom: 2px;
`

class EtapaUm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nome: "",
            idade: "",
            email: "",
            escolaridade: "",
        }
    }
    
    aoMudarNome = (event) => {
        this.setState({nome: event.target.value});
    }
    aoMudarIdade = (event) => {
        this.setState({idade: event.target.value});
    }
    aoMudarEmail = (event) => {
        this.setState({email: event.target.value});
    }
    aoEscolherOpcao = (event) => {
        this.setState({escolaridade: event.target.value})
    }

    render(){

        return (
            <Container>
                <TituloEtapa>ETAPA I - Dados Gerais</TituloEtapa>
                <NomeCampo>Nome:</NomeCampo>
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={this.state.nome}
                    onChange={this.aoMudarNome}
                />

                <NomeCampo>Idade:</NomeCampo>
                <input
                    type="text"
                    placeholder="Digite sua idade"
                    value={this.state.idade}
                    onChange={this.aoMudarIdade}
                />

                <NomeCampo>E-mail:</NomeCampo>
                <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={this.state.email}
                    onChange={this.aoMudarEmail}
                />

                <NomeCampo>Escolaridade:</NomeCampo>
                <select onChange={this.aoEscolherOpcao}>
                    <option value="emc">Ensino Médio Completo</option>
                    <option value="emi">Ensino Médio Incompleto</option>
                    <option value="esc">Ensino Superior Completo</option>
                    <option value="esi">Ensino Superior Incompleto</option>
                </select>
            </Container>
        );
    }
}
export default EtapaUm;