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
            campoUsuario: "Usuário",
            campoMensagem: "Digite sua mensagem...",
        }
    }

    render(){
    
        return (
            <BigContainer>
                <CampoUser 
                    type="text"
                    placeholder={this.state.campoUsuario}
                />                
                <CampoMensagem 
                    type="text"
                    placeholder={this.state.campoMensagem}
                />
                <button>Enviar</button>
            </BigContainer>
        )
    }
}

export default Entrada;