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

class EtapaTres extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            motivo: "",
            extra: "",
        }
    }
    
    aoIncluirMotivo = (event) => {
        this.setState({motivo: event.target.value});
    }    

    render(){

        return (
            <Container>
                <TituloEtapa>ETAPA II</TituloEtapa>
                <NomeCampo>Algum motivo especial pra não ter feito uma graduação?</NomeCampo>
                <input 
                    type="text"
                    placeholder="Pode digitar qualquer coisa..."                    
                    value={this.state.motivo}
                    onChange={this.aoIncluirMotivo}
                />

                <NomeCampo>Realizou cursos complementares?:</NomeCampo>
                <select>
                    <option value="tecnico">Curso(s) técnico(s)</option>
                    <option value="ingles">Curso de inglês</option>
                    <option value="nda">Nenhuma das opções anteriores</option>                    
                </select>
            </Container>
        );
    }
}

export default EtapaTres;