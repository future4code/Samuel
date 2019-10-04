import React from 'react';
import styled from 'styled-components';

const CaixaMensagem = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
`

const NomeUsuario = styled.p`
    margin: 0;
    color: red;
    font-weight: bold;    
`

const MensagemUsuario = styled.p`
    margin: 0;
    color: blue;
`

export function Mensagem(props){
    return (
        <CaixaMensagem>
            <NomeUsuario>{props.nomeUsuario}</NomeUsuario>
            <MensagemUsuario>{props.texto}</MensagemUsuario>
        </CaixaMensagem>
    )
}