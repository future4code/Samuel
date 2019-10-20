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

class FormularioPlaylist extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nomePlaylist: "",
        }
    }

    onChangeNomePlaylist = (event) => {
        this.setState({nomePlaylist: event.target.value});
    }

    cadastrarNovaPlaylist = () => {
        if(this.state.nomePlaylist === ""){
            window.alert("Escolha um nome para a playlist, por favor.");
        }
        else{
            this.props.createPlaylist(this.state.nomePlaylist);
            this.limpaCampos();
        }
    };

    limpaCampos(){
        this.setState({nomePlaylist: ""});
    }

    render(){

        return (
            <FormContainer>
                <h3>CRIAR PLAYLIST</h3>
                <EntradaDados 
                    type="text"
                    value={this.state.nomePlaylist}
                    placeholder="Digite o nome..."
                    onChange={this.onChangeNomePlaylist}
                />
                <BotaoCadastrar onClick={this.cadastrarNovaPlaylist}>CRIAR</BotaoCadastrar>
            </FormContainer>
        )
    }
}

export default FormularioPlaylist;
