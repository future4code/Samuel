import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class TeamMaker extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            geracao: "",
            tipoPokemon: ""
        }
    }
    
    fetchPokemonByTypeAndGen = () => {

        if (this.state.geracao === "gen1"){
            const request  = axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151", {
                params: { //verificar se precisa
                }
            });

            request.then((response) => {
                console.log(response.data.results);
                for(let pokemon of response.data.results){
                    console.log("Nome:", pokemon.name) 
                }
            }).catch((error) => {
                console.log(error.message);
            });
        }else{
            console.log("geração inexistente!")

        }
    }    

    createTypeSelector = () => {
        return (
            <select value={this.state.tipoPokemon} onChange={this.onChangeType}>
                <option value="" disabled="disabled" defaultValue>TIPO</option>
                <option value="steel">Aço</option>
                <option value="water">Água</option>
                <option value="dragon">Dragão</option>
                <option value="electric">Elétrico</option>
                <option value="fairy">Fada</option>
                <option value="fire">Fogo</option>
                <option value="ghost">Fantasma</option>
                <option value="ice">Gelo</option>
                <option value="grass">Grama</option>
                <option value="bug">Inseto</option>
                <option value="fighting">Lutador</option>
                <option value="normal">Normal</option>
                <option value="rock">Pedra</option>
                <option value="psychic">Psíquico</option>
                <option value="dark">Sombrio</option>
                <option value="ground">Terra</option>
                <option value="poison">Venenoso</option>
                <option value="flying">Voador</option>
            </select>
        )
    }

    onChangeType = (event) => {
        this.setState({ tipoPokemon: event.target.value });
    }

    onChangeGeneration = (event) => {
        this.setState({ geracao: event.target.value });
    }

    createGenSelector = () => {
        return (
            <select value={this.state.geracao} onChange={this.onChangeGeneration}>
                <option value="" disabled="disabled" defaultValue>GERAÇÃO</option>
                <option value="gen1">Geração I</option>
                {/* 
                <option value="gen2">Geração II</option>                
                <option value="gen3">Geração III</option>
                <option value="gen4">Geração IV</option>
                <option value="gen5">Geração V</option>
                <option value="gen6">Geração VI</option>
                <option value="gen7">Geração VII</option> 
                */}
            </select>
        )
    }    

    render(){

        return (
            <div>
                <span>Escolha I: </span>
                {this.createGenSelector()}
                {this.createTypeSelector()}
                <button onClick={this.fetchPokemonByTypeAndGen}>GO!</button>
                <img src={this.state.pokemon1photo}/>
            </div>
        )
    }
}

export default TeamMaker;