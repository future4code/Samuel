import React from 'react';
import styled from 'styled-components';

const ContainerUsuario = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
`

const NomeUsuario = styled.p`
    margin: 0;
    padding-left: 5px;
`

const BotaoExcluir = styled.button`
    color: red;
    border: 1px solid orange;
    border-radius: 2px;
    background-color: white;
    font-weight: bold;
    &:hover {
        background-color: orange;        
        color: white;
    }
    &:active{
        background-color: red;        
    }
    &:focus {
    outline: none;
    }
`

function Usuario(props){

    function removerUsuario(){
        props.excluirUsuario(props.id);
    }

    return (
        <ContainerUsuario>
            <NomeUsuario>{props.nome}</NomeUsuario>
            <BotaoExcluir onClick={removerUsuario}>X</BotaoExcluir>
        </ContainerUsuario>
    )
}

export default Usuario;