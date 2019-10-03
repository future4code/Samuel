import React from 'react';
import './Post.css';

class Post extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            numeroCurtidas : 0,
            numeroComentarios : 0,
        }
    }

    render() {

        const fotoUsuario = require("../../Imagens/samuel.jpg");
        const iconeCoracao = require("../../Imagens/favorite-white.svg");
        const iconeComentario = require("../../Imagens/comment_icon.svg");
        const nomeUsuario = "Samuel";
        const fotoPost = "https://picsum.photos/350/250";
        return (
            <div className="post">
                <div className="cabecalho">
                    <img
                        className="fotoUsuario"
                        src={fotoUsuario}
                        alt="fotoUsuario"
                    />
                    <p className="nomeUsuario">{nomeUsuario}</p>
                </div>
                <img src={fotoPost} alt="fotoPost" />
                <div className="interacao">
                    <div className="curtidas">
                        <img
                            src={iconeCoracao}
                            alt="iconeCoracao"
                        />
                        <p className="statusCurtida">{this.props.numeroCurtidas}</p>
                    </div>
                    <div className="comentarios">
                        <img
                            src={iconeComentario}
                            alt="iconeComentario"
                        />
                        <p className="qtidadeComentarios">{this.props.numeroComentarios}</p>
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
        );
    }
}
export default Post;