import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FormularioMusica from './FormularioMusica';

const BigContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: left;
    margin: 10px;
    font-size: 12pt;
`

const NomeLista = styled.ul`
    margin: 0;
    padding: 0;
    
`

const Musica = styled.li`
    padding-left: 25px;
    list-style-position: inside;
`

const BotaoExcluir = styled.button`
    color: red;
    border: 1px solid orange;
    border-radius: 2px;
    background-color: white;
    font-weight: bold;
    &:hover {
        background-color: orange;        
        color: white;
    }
    &:active{
        background-color: red;        
    }
    &:focus {
    outline: none;
    }
`

const Musicas = styled.div`

`

class Playlist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.nome,
            id: this.props.id,
            musicList: [],
            incluirMusica: false
        }
    }
    
    excluirPlaylist = () => {
        if(window.confirm("Deseja mesmo excluir essa playlist?")){
            this.props.excluirPlaylist(this.state.id);
        }
    }

    baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api/playlists';

    fetchMusicsOnPlaylist = async () => {
        try{
        const request = await axios.get(`${this.baseUrl}/getPlaylistMusics/${this.id}`,
          { headers: { "auth": "3cfdfe6d73fbb3b3bd84bba5f16098c9" } }
        );
        //atualiza state com todas as playlists existentes:
        this.setState({musicList: request.data.result.list});
        console.log(this.state.musicList) // OK
        }catch(error){
          console.log(error.message);
        }
    }

    mostrarFormularioMusica = () => {
        console.log("fui clicada!");
        const mostrarFormularioMusica = !this.state.incluirMusica;
        this.setState({incluirMusica : mostrarFormularioMusica})
    }

    render(){

        return (
            <BigContainer>                
                <NomeLista onClick={this.mostrarFormularioMusica}>{this.state.name}
                <BotaoExcluir onClick={this.excluirPlaylist}>X</BotaoExcluir>
                </NomeLista>
                {this.state.incluirMusica && (<FormularioMusica/>)}
                <Musicas>                    
                    {/* {this.state.musicList} */}
                    <Musica>teste1</Musica>
                    <Musica>teste2</Musica>
                    <Musica>teste3</Musica>
                </Musicas>
            </BigContainer>
        )
    }
}

export default Playlist;