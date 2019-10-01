import React from "react";
import "./App.css";
import { BigCard } from "./Components/BigCard/BigCard";
import { PageSection} from "./Components/PageSection/PageSection";
import { SmallCard } from "./Components/SmallCard/SmallCard";
import { ImageButton } from "./Components/ImageButton/ImageButton";

const quemSou = {
  imagem: require("./imagens/samuel.jpg"),
  titulo: "Samuel Quaresma Oliveira",
  texto: "Generalista 3D, estudante Web Dev Full Stack"
}

const emailContato = {
  icone: require("./imagens/email.svg"),
  email: "squoliver@gmail.com",
  etiqueta: "email:"
}

const enderecoContato = {
  icone: require("./imagens/house.svg"),
  endereco: "Rua Treze de Maio, 642 Apto 6 - São Vicente/SP",
  etiqueta: "endereço:"
}

const meusDadosPessoais = {
  tipo: "dadosPessoais",
  titulo: "Dados Pessoais"
}

const minhasExperiencias = {
  tipo: "experiencias",
  titulo: "Experiências Profissionais"
}

const exp1 = {
  logo: require("./imagens/logo_grao.png"),
  nomeEmpresa: "Grão de Gente",
  cargo: "Generalista Pleno I, RRW Designer (Santos/SP)"
}

const exp2 = {
  logo: require("./imagens/logo_g2e.png"),
  nomeEmpresa: "Grupo de Educação e Entretenimento - UFSC",
  cargo: "Estagiário, G2E – Grupo de Educação e Entretenimento (Florianópolis/SC)"
}

const botao1 = {
  aparencia : "botaoDeTexto",
  texto: "Ver mais",
  imagem: require("./imagens/expand.svg")
}

const minhasRedesSociais = {
  tipo: "redesSociais",
  titulo: "Redes Sociais"
}

const botao2 = {
  aparencia : "botaoDeTexto",
  texto: "Facebook",
  imagem: require("./imagens/facebook.png")
}

function App() {
  return (
    <div className="App">

      <PageSection nomeSessao={meusDadosPessoais.tipo} titulo={meusDadosPessoais.titulo}>        
        <BigCard imagem={quemSou.imagem} titulo={quemSou.titulo} texto={quemSou.texto} />
        <SmallCard icone={emailContato.icone} titulo={emailContato.etiqueta} texto={emailContato.email} />
        <SmallCard icone={enderecoContato.icone} titulo={enderecoContato.etiqueta} texto={enderecoContato.endereco} />
        <ImageButton aparenciaBotao={botao1.aparencia} textoBotao={botao1.texto} imagem={botao1.imagem} />
      </PageSection>

      <PageSection nomeSessao={minhasExperiencias.tipo} titulo={minhasExperiencias.titulo}>
        <BigCard imagem={exp1.logo} titulo={exp1.nomeEmpresa} texto={exp1.cargo} />        
        <BigCard imagem={exp2.logo} titulo={exp2.nomeEmpresa} texto={exp2.cargo} />
      </PageSection>

      <PageSection nomeSessao={minhasRedesSociais.tipo} titulo={minhasRedesSociais.titulo}>
        <ImageButton aparenciaBotao={botao2.aparencia} textoBotao={botao2.texto} imagem={botao2.imagem} />
      </PageSection>

    </div>
  );
}
export default App;