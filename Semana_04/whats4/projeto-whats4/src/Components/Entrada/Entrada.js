import React from 'react';
import styled from 'styled-components';

const CampoUser = styled.input`
    width: 100px;
`

const CampoMensagem = styled.input`
    width: 400px;
`

const BigContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    height: 30px;
    margin: 10px 0;
`

class Entrada extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            campoUsuario: "",
            campoMensagem: "",
        }
    }

    aoEnviarMensagem = () =>{
        const user = this.state.campoUsuario;
        const mensagem = this.state.campoMensagem;
        const novaMensagem = {
            nomeUsuario: user,
            texto: mensagem,
        }
        this.props.minhaNovaMensagem(novaMensagem);
        //pra 'limpar' o campoMensagem depois do envio:
        this.setState({campoMensagem: ""}) 
    }

    aoMudarUsuario = (event) => {
        this.setState({
            campoUsuario: event.target.value,
        })
    }

    aoMudarMensagem = (event) => {
        this.setState({
            campoMensagem: event.target.value,
        })
    }

    render(){
    
        return (
            <BigContainer>
                <CampoUser 
                    type="text"
                    placeholder="Usuário"
                    value={this.state.campoUsuario}
                    onChange={this.aoMudarUsuario}
                />
                <CampoMensagem 
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={this.state.campoMensagem}
                    onChange={this.aoMudarMensagem}
                />
                <button onClick={this.aoEnviarMensagem}>Enviar</button>
            </BigContainer>
        )
    }
}

export default Entrada;