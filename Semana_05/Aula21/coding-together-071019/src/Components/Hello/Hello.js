import React from 'react';

export class Hello extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nome: "Samuel",
            idade: "36",
            linguagemFavorita: "Java",
        }

    }

    componentDidMount(){
        const stateArmazenado = JSON.parse(window.localStorage.getItem("estado-Hello"));
        this.setState(stateArmazenado);
    }

    componentWillUnmount(){
        const estadoEmString = JSON.stringify(this.state);
        window.localStorage.setItem("estado-Hello", estadoEmString);
    }

    componentDidUpdate(){
        console.log("Fui atualizado!");
    }

    aoClicarMudaNome = () => {
        this.setState({nome: "Quaresma"});
    }

    aoRealizarAlteracoesNome = (event) => {
        this.setState({ nome: event.target.value });
    }

    aoRealizarAlteracoesIdade = (event) => {
        this.setState({ idade: event.target.value });
    }

    aoRealizarAlteracoesLinguagemFav = (event) => {
        this.setState({ linguagemFavorita: event.target.value });
    }

    render(){
        return (
            <div>
                <input
                    onChange={this.aoRealizarAlteracoesNome}
                    type="text"
                    value={this.state.nome}
                />
                <input
                    onChange={this.aoRealizarAlteracoesIdade}
                    type="text"
                    value={this.state.idade}
                />
                <input
                    onChange={this.aoRealizarAlteracoesLinguagemFav}
                    type="text"
                    value={this.state.linguagemFavorita}
                />
                <h3>Oi, eu sou o componente B</h3> 
                {/*<h3>Oi, eu sou o componente {this.state.nome}</h3>*/}  
                {/*se quiser usar o botão abaixo, essa linha ^^^ substitui a anterior */}
                {/*<button onClick={this.aoClicarMudaNome}>Mude meu nome ^</button> */}


            </div>
        );
    }
}

export default Hello;