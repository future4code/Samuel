import React from 'react';
import './PageSection.css';

export function PageSection(props){
    return (
        <section className={props.nomeSessao}>
            <h1> { props.titulo }</h1>
            {props.children}
        </section>
    )
}