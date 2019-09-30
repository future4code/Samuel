import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <a href="index.html"><h1>FutureTube</h1></a>
        <input type="search" placeholder="Busca" />
      </header>
      <main>
        <nav>
          <ul>
            <a href="index.html"><li>Início</li></a>
            <li>Em alta</li>
            <li>Inscrições</li>
            <li>Originais</li>
          </ul>
          <hr/>
          <ul>
            <li>Biblioteca</li>
            <li>Histórico</li>
          </ul>
        </nav>
        <section id="videos">
          <article className="meusVideos">
            <img src={require("./imagens/preview_01.jpg")} alt="Preview 01" />
            <h2>Media 1</h2>
          </article>
          <article className="meusVideos">
            <img src={require("./imagens/preview_02.jpg")} alt="Preview 02" />
            <h2>Media 2</h2>
          </article>
          <article className="meusVideos">
            <img src={require("./imagens/preview_03.jpg")} alt="Preview 03" />
            <h2>Media 3</h2>
          </article>
          <article className="meusVideos">
              <a href="video4.html">
                <img src={require("./imagens/preview_04.jpg")} alt="Preview 04" />
                <h2>Media 4</h2>
              </a> 
          </article>
          <article className="meusVideos">
            <img src={require("./imagens/preview_05.jpg")} alt="Preview 05" />
            <h2>Media 5</h2>
          </article>
          <article className="meusVideos">
            <img src={require("./imagens/preview_06.jpg")} alt="Preview 06" />
            <h2>Media 6</h2>
          </article>
          <article className="meusVideos">
              <a href="video7.html">
                <img src={require("./imagens/preview_07.jpg")} alt="Preview 07" />
                <h2>Media 7</h2>
              </a>
          </article>
          <article className="meusVideos">
            <img src={require("./imagens/preview_08.jpg")} alt="Preview 08" />
            <h2>Media </h2>
          </article>
        </section>
      </main>
      <footer>
          <h1>Oi! Eu moro no footer!</h1>
      </footer>
    </div>
  );
}

export default App;
