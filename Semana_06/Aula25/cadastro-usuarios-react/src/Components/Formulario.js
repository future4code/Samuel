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
    margin: auto;
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

class Formulario extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            nomeUsuario: "",
            emailUsuario: ""
        }
    }

    onChangeNomeUsuario = (event) => {
        this.setState({nomeUsuario: event.target.value});
    }

    onChangeEmailUsuario = (event) => {
        this.setState({emailUsuario: event.target.value});
    }

    cadastrarNovoUsuario = () => {
        if(this.state.nomeUsuario === "" || this.state.emailUsuario === ""){
            window.alert("Os dois campos são de preenchimento obrigatório.");
        }
        else{
            this.props.cadastrarUsuario(this.state.nomeUsuario, this.state.emailUsuario);
            this.limpaCampos();
        }
    };

    limpaCampos(){
        this.setState({nomeUsuario: "", emailUsuario: ""});
    }

    render(){

        return (
            <FormContainer>
                <h3>Cadastrar usuário:</h3>
                <EntradaDados 
                    type="text"
                    value={this.state.nomeUsuario}
                    placeholder="Digite o nome..."
                    onChange={this.onChangeNomeUsuario}
                />
                
                <EntradaDados 
                    type="email"
                    value={this.state.emailUsuario}
                    placeholder="Digite o e-mail..."
                    onChange={this.onChangeEmailUsuario}
                />

                <BotaoCadastrar onClick={this.cadastrarNovoUsuario}>SALVAR</BotaoCadastrar>
            </FormContainer>
        )
    }
}

export default Formulario;