import React from 'react';
import styled from 'styled-components';



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


    cadastrar = () => {this.props.cadastrarUsuario(this.state.nomeUsuario, this.state.emailUsuario)};

    render(){

        return (
            <div>
                <input 
                    type="text"
                    value={this.state.nomeUsuario}
                    placeholder="Digite o nome do usuário"
                    onChange={this.onChangeNomeUsuario}
                />
                
                <input 
                    type="text"
                    value={this.state.emailUsuario}
                    placeholder="Digite o e-mail do usuário"
                    onChange={this.onChangeEmailUsuario}
                />

                <button onClick={this.cadastrar}>Cadastrar</button>
            </div>
        )
    }
}

export default Formulario;