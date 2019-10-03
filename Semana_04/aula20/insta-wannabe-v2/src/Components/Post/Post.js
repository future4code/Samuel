import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: flex-start;
    border: 1px solid lightgray;
    margin: 10px 0;
`

const Cabecalho = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
`

const FotoUsuario = styled.img`
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`

const PainelInterativo = styled.div`  
    display: flex;
    width: 100%;  
    justify-content: space-between;
    align-items: center;
`

const Curtidas = styled.div`
    display: flex;  
    align-items: center;
    height: 30px;
    margin: 5px;
`

const Comentarios = styled.div`
    display: flex;  
    align-items: center;
    height: 30px;
    margin: 5px;
`

const EspacoParaComentar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
`
/*
const ParagrafoSemMargem = styled.p`
    margin: 0;
`
*/

const iconeCoracaoVazio = require("../../Imagens/favorite-white.svg");
const iconeCoracaoCheio = require("../../Imagens/favorite.svg");
const iconeComentario = require("../../Imagens/comment_icon.svg");

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            curtido: false, // valor inicial, coração vazio
            iconeCoracao: iconeCoracaoVazio,
            iconeComentario: iconeComentario,
        }
    }

    render(){
        this.aoSerCurtido = () => {
            console.log("valor de curtido antes da alteração:", this.state.curtido); 
            const novoStatusCurtir = !this.state.curtido; 
            console.log("valor de novoStatusCurtir, que inverte o valor de curtido:", novoStatusCurtir);
            this.setState({curtido: novoStatusCurtir}); 
            console.log("valor de curtido:", this.state.curtido);
            
            /*
            if(this.state.curtido){
                console.log("curtido é true");
                //this.setState({iconeCoracao: iconeCoracaoCheio});
            }
            else{
                console.log("curtido é false");
                //this.setState({iconeCoracao: iconeCoracaoVazio});
            }
            */
        };

        return (
            <PostContainer>
                <Cabecalho>
                    <FotoUsuario
                        src={this.props.fotoUsuario}
                        alt="fotoUsuario"
                    />
                    <p>{this.props.nomeUsuario}</p>
                </Cabecalho>
                <img src={this.props.fotoPost} alt="fotoPost" />
                <PainelInterativo>
                    <Curtidas>
                        <img
                            src={this.state.iconeCoracao}
                            onClick={this.aoSerCurtido}
                            alt="iconeCoracao"
                        />
                        <p>{this.props.numeroCurtidas}</p>
                    </Curtidas>
                    <Comentarios>
                        <img
                            src={this.state.iconeComentario}
                            alt="iconeComentario"
                        />
                        <p>{this.props.numeroComentarios}</p>
                    </Comentarios>
                </PainelInterativo>
                <EspacoParaComentar>
                    <input
                        type="text"
                        placeholder="Escreva seu comentário..."
                    />
                    <button>Comentar</button>
                </EspacoParaComentar>
            </PostContainer>
        );
    }

}

export default Post;

Post.propTypes = {
    fotoUsuario: PropTypes.string.isRequired,
    nomeUsuario: PropTypes.string.isRequired,
    fotoPost: PropTypes.string.isRequired,
    
}