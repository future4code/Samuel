import React from 'react';
import { Despesa } from '../Despesa/Despesa';
import styled from 'styled-components';

const ContainerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function TelaCadastro(){
    return <ContainerCadastro>
               <h2>Cadastrar Despesa:</h2>
               <Despesa/>
               <button>Salvar</button>
               <button>Extrato</button>
           </ContainerCadastro>
}