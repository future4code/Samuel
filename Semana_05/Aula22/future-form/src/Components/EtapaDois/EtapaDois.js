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

class EtapaDois extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nomeCurso: "",
            nomeIES: "",
        }
    }

    
    aoMudarNomeCurso = (event) => {
        this.setState({nomeCurso: event.target.value});
    }
    aoMudarNomeIES = (event) => {
        this.setState({nomeIES: event.target.value});
    }    

    render(){

        return (
            <Container>
                <TituloEtapa>ETAPA II</TituloEtapa>
                <NomeCampo>Qual o curso?</NomeCampo>
                <input 
                    type="text"
                    placeholder="Digite o nome do seu curso"
                    value={this.state.nomeCurso}
                    onChange={this.aoMudarNomeCurso}
                />

                <NomeCampo>Unidade de Ensino:</NomeCampo>
                <input 
                    type="text"                    
                    placeholder="Nome da instituição de ensino..."
                    value={this.state.nomeIES}
                    onChange={this.aoMudarNomeIES}
                />
            </Container>
        );
    }
}

export default EtapaDois;