import React from 'react';
import styled from 'styled-components';

const BlackBox = styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
    margin: 10px;
`

export function CaixaPreta(){
    return (
        <BlackBox />
    );
}