import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 50%;
    margin: auto;
`

const EntradaDados = styled.input`
    display: flex;
    align-items: center;
    height: 30px;
    width: 90%;
    margin: 5px;
`

const BotaoCadastrar = styled.button`
    width: 50%;
    height: 30px;
    background-color: white;
    border: 1px solid black;
    margin: 5px;
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

    cadastrarNovoUsuario = () => {this.props.cadastrarUsuario(this.state.nomeUsuario, this.state.emailUsuario)};

    render(){

        return (
            <FormContainer>
                <h4>Cadastrar usuário:</h4>
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