import React from 'react';
import styled from 'styled-components';

export function Tarefa(props) {
    return (
        <li>
            {props.descTarefa}
        </li>
    );
}