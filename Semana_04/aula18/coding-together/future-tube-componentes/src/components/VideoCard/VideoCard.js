import React from 'react';
import './VideoCard.css';
import PropTypes from 'prop-types';

export function VideoCard(props) {
    return (
      <div className="video-card-container">
        <img src={props.imagem} alt=""/>
        <div className="title-container">
          <p>{props.titulo}</p>
        </div>
      </div>
    )
  }
  
VideoCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
}