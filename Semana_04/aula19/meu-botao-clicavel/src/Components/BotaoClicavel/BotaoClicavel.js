import React from 'react';
import './BotaoClicavel.css';

export function BotaoClicavel(props){
    return (
        <div className="containerBig">
            <h1>O botão foi clicado { props.numeroCliques } vezes.</h1>
            <button> Clique aqui!</button>
        </div>
    )
}