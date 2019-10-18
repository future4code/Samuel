import React from 'react';
import axios from 'axios';
import Playlist from './Components/Playlist';
import FormularioPlaylist from './Components/FormularioPlaylist';
import styled from 'styled-components';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BotaoVerLista = styled.button`
  margin: 10px;
  height: 30px;
  width: 25%;
  background-color: white;
  padding: 5px;
  border: 2px solid orange;
  border-radius: 8px;
  font-size: 12pt;
  transition-duration: 0.25s;
  &:hover {
    background-color: orange;        
    color: white;
  }
  &:active{
    background-color: red;
    border: 2px solid red;
  }
  &:focus {
    outline: none;
  }
`

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playlists: [],
      showPlaylists: false
    }
  }
  
  baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api/playlists';

  componentDidMount(){
    this.fetchPlaylists();
  }

  fetchPlaylists = async () => {
    try{
    const request = await axios.get(`${this.baseUrl}/getAllPlaylists`,
      { headers: { "auth": "3cfdfe6d73fbb3b3bd84bba5f16098c9" } }
    );
    //atualiza state com todas as playlists existentes:
    this.setState({playlists: request.data.result.list});
    console.log(this.state.playlists) // OK
    }catch(error){
      console.log(error.message);
    }
  }

  createPlaylist = (nomePlaylist) => {
    const novaPlaylist = {
      name: nomePlaylist
    }
    try{      
      axios.post(`${this.baseUrl}/createPlaylist`, novaPlaylist,
        { headers: { "auth": "3cfdfe6d73fbb3b3bd84bba5f16098c9" } }
      );
      this.fetchPlaylists();
      window.alert("Playlist criada com sucesso!");
      }catch(error){
        console.log(error.message);
      }
  }

  excluirPlaylist = async (id) => {    
    try{
        await axios.delete(`${this.baseUrl}/deletePlaylist?playlistId=${id}`,
            { headers: { "auth": "3cfdfe6d73fbb3b3bd84bba5f16098c9" } }
        )
        console.log("playlist excluida com sucesso");
    }catch(error){
        console.log(error.message);
    }
    this.fetchPlaylists();
  }

  verLista = () => {
    const mostrarListas = !this.state.showPlaylists
    this.setState({showPlaylists : mostrarListas})
    this.fetchPlaylists();
  }  

  render(){

    const minhasPlaylists = this.state.playlists.map((cadaPlaylist, i)=>{
      return (
        <Playlist 
          nome={cadaPlaylist.name} 
          id={cadaPlaylist.id} 
          key={i}
          excluirPlaylist={this.excluirPlaylist}
        />
      )
    });

    const tela = this.state.showPlaylists ? 
      <div>
        <h3>Minhas playlists:</h3>
        {minhasPlaylists}
      </div> :
      <FormularioPlaylist createPlaylist={this.createPlaylist}/>

    return (
      <BigContainer>
        <BotaoVerLista onClick={this.verLista}>{this.state.showPlaylists ? "Voltar" : "Ver Playlists"}</BotaoVerLista>
        {tela}
      </BigContainer>
    );
  }
}

export default App;