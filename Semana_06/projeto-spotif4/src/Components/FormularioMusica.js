import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 8px;
    width: 50%;
    margin: 50px auto;
`

const EntradaDados = styled.input`
    display: flex;
    align-items: center;
    height: 30px;
    width: 90%;
    border: 1px solid black;
    border-radius: 8px;
    margin: 5px;
    padding-left: 10px;
    font-size: 12pt;
`

const BotaoCadastrar = styled.button`
    width: 30%;
    height: 30px;
    background-color: white;
    border: 2px solid orange;
    border-radius: 8px;
    margin: 5px;
    font-size: 12pt;
    transition-duration: 0.25s;
    &:hover {
        background-color: orange;
        color: white;
    }
    &:active {
        background-color: red;
        border: 2px solid red;
    }
    &:focus {
        outline: none;
    }
`

class FormularioMusica extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nomeMusica: "",
            nomeArtista: "",
            linkMusica: "",
        }
    }

    onChangeNomeMusica = (event) => {
        this.setState({nomePlaylist: event.target.value});
    }

    onChangeNomeArtista = (event) => {
        this.setState({nomeArtista: event.target.value});
    }

    onChangeLinkMusica = (event) => {
        this.setState({linkMusica: event.target.value});
    }
    
    incluirNovaMusica = () => {

    }

    limpaCampos(){
        this.setState({
            nomeMusica: "",
            nomeArtista: "",
            linkMusica: ""
        });
    }

    render(){

        return (
            <FormContainer>
                <h3>Incluir música:</h3>
                <EntradaDados 
                    type="text"
                    value={this.state.nomeMusica}
                    placeholder="Digite o nome..."
                    onChange={this.onChangeNomeMusica}
                />
                <EntradaDados 
                    type="text"
                    value={this.state.nomeArtista}
                    placeholder="Digite o nome do artista/banda..."
                    onChange={this.onChangeNomeArtista}
                />
                <EntradaDados 
                    type="text"
                    value={this.state.linkMusica}
                    placeholder="Digite o link para a música..."
                    onChange={this.onChangeLinkMusica}
                />
                <BotaoCadastrar onClick={this.incluirNovaMusica}>Incluir</BotaoCadastrar>
            </FormContainer>
        )
    }
}

export default FormularioMusica;
