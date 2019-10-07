import React from 'react';
import Post from './Components/Post/Post';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const fotoUsuario = require("./Imagens/samuel.jpg");
const nomeUsuario = "Samuel";
const fotoPost = "https://picsum.photos/350/250";

function App() {
  return (
    <AppContainer>
      <Post 
        fotoUsuario={fotoUsuario} 
        nomeUsuario={nomeUsuario}
        fotoPost={fotoPost}
      />
    </AppContainer>
  );
}

export default App;
