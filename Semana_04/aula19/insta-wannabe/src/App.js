import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      qtidadeCurtidas: 0,
      qtidadeComentarios: 0,
      mostraOpcaoComentar: false,
    }
  }

  

  render() {

    const fotoUsuario = require("./Imagens/samuel.jpg");
    const iconeCoracao = require("./Imagens/favorite-white.svg");
    const iconeComentario = require("./Imagens/comment_icon.svg");
    const nomeUsuario = "Samuel";
    const fotoPost = "https://picsum.photos/350/250";
    let numeroCurtidas = 0;
    let numeroComentarios = 0;

    return (
      <div className="App">
        <div className="post">
          <div className="cabecalho">
            <img 
              className="fotoUsuario" 
              src={fotoUsuario} 
              alt="fotoUsuario"
            />
            <p className="nomeUsuario">{nomeUsuario}</p>
          </div>
          <img src={fotoPost} alt="fotoPost"/>
          <div className="interacao">
            <div className="curtidas">
              <img 
                src={iconeCoracao}
                alt="iconeCoracao"
              />
              <p className="statusCurtida">{numeroCurtidas}</p>
            </div>
            <div className="comentarios">
              <img 
                src={iconeComentario} 
                alt="iconeComentario"
              />
              <p className="qtidadeComentarios">{numeroComentarios}</p>
            </div>
          </div>
          <div className="comentar">
            <input 
              className="campoComentario" 
              type="text"
              placeholder="Escreva seu comentário..."
            />
            <button className="botaoComentar">Comentar</button>
          </div>
        </div>        
      </div>
    );
  }
}
export default App;