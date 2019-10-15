import React from 'react';
import styled from 'styled-components';

const ContainerUsuario = styled.div`
    background-color: lightblue;
`

function Usuario(props){

    return (
        <ContainerUsuario>
            <p>{props.name}</p>
            <p>{props.email}</p>            
        </ContainerUsuario>
    )
}

export default Usuario;