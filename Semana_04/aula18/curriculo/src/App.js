import React from "react";
import "./App.css";
import { BigCard } from "./Components/BigCard/BigCard";
import { PageSection} from "./Components/PageSection/PageSection";
import { SmallCard } from "./Components/SmallCard/SmallCard";

const quemSou = {
  imagem: require("./imagens/samuel.jpg"),
  titulo: "Samuel Quaresma Oliveira",
  texto: "Generalista 3D, estudante Web Dev Full Stack"
}

const emailContato = {
  icone: require("./imagens/email.svg"),
  email: "squoliver@gmail.com"
}

const enderecoContato = {
  icone: require("./imagens/house.svg"),
  endereco: "Rua Treze de Maio, 642 Apto 6 - São Vicente/SP"
}

const meusDadosPessoais = {
  tipo: "dadosPessoais",
  titulo: "Dados Pessoais"
}

const minhasExperiencias = {
  tipo: "minhasExperiencias",
  titulo: "Experiências"
}

function App() {
  return (
    <div className="App">
      <PageSection nomeSessao={meusDadosPessoais.tipo} titulo={meusDadosPessoais.titulo}>        
        <BigCard imagem={quemSou.imagem} titulo={quemSou.titulo} texto={quemSou.texto} />
        <SmallCard icone={emailContato.icone} titulo="e-mail: " texto={emailContato.email} />
        <SmallCard icone={enderecoContato.icone} titulo="e-mail: " texto={enderecoContato.endereco} />
      </PageSection>
      <PageSection nomeSessao={minhasExperiencias.tipo} titulo={minhasExperiencias.titulo}>        

      </PageSection>

      
    </div>
  );
}
export default App;