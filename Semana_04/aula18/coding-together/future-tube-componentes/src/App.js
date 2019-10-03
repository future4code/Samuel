import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { VideoCard } from './components/VideoCard/VideoCard';

const video1 = {
  imagem: 'https://picsum.photos/200/100?a=1',
  titulo: 'Titulo do vídeo 1'
}

const video2 = {
  imagem: 'https://picsum.photos/200/100?a=2',
  titulo: 'Titulo do vídeo 2'
}

const video3 = {
  imagem: 'https://picsum.photos/200/100?a=3',
  titulo: 'Titulo do vídeo 3'
}

const video4 = {
  imagem: 'https://picsum.photos/200/100?a=4',
  titulo: 'Titulo do vídeo 4'
}

const video5 = {
  imagem: 'https://picsum.photos/200/100?a=5',
  titulo: 'Titulo do vídeo 5'
}

const video6 = {
  imagem: 'https://picsum.photos/200/100?a=6',
  titulo: 'Titulo do vídeo 6'
}

const video7 = {
  imagem: 'https://picsum.photos/200/100?a=7',
  titulo: 'Titulo do vídeo 7'
}

const video8 = {
  imagem: 'https://picsum.photos/200/100?a=8',
  titulo: 'Titulo do vídeo 8'
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <VideoCard imagem={video1.imagem} titulo={video1.titulo} />
        <VideoCard imagem={video2.imagem} titulo={video2.titulo} />
        <VideoCard imagem={video3.imagem} titulo={video3.titulo} />
        <VideoCard imagem={video4.imagem} titulo={video4.titulo} />
        <VideoCard imagem={video5.imagem} titulo={video5.titulo} />
        <VideoCard imagem={video6.imagem} titulo={video6.titulo} />
        <VideoCard imagem={video7.imagem} titulo={video7.titulo} />
        <VideoCard imagem={video8.imagem} titulo={video8.titulo} />
      </main>
      <Footer />      
    </div>
  );
}

export default App;