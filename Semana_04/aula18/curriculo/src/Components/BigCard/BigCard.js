import React from 'react';
import './BigCard.css';

export function BigCard(props){
    return (
        <div className="containerBig">
            <img src={ props.imagem } className="minhaFoto" alt=""/>
            <div className="texto">
                <h4>{ props.titulo }</h4>
                <p> { props.texto } </p>
            </div>
        </div>
    )
}