import React from 'react';
import './ImageButton.css';

export function ImageButton(props){
    return (
        <button className={props.aparenciaBotao}>
            <img src={props.imagem} alt=""/>
            <p>{props.textoBotao}</p> 
        </button>
    )
}