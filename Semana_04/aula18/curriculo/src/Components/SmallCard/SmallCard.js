import React from 'react';
import './SmallCard.css';

export function SmallCard(props){
    return (
        <div className="containerSmall">
            <img src={ props.icone } className="meuIcone" alt=""/>
            <p className="etiqueta">{ props.titulo }</p>
            <p className="info"> { props.texto } </p>
        </div>
    )
}