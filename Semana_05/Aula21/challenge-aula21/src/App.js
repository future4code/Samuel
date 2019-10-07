import React from 'react';
import { CaixaPreta } from './Components/CaixaPreta/CaixaPreta';
import styled from 'styled-components';

const SmallContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numeroDeBlocos: 1,
    }
  }

  aoMudarNumeroBlocos = (event) => {
    const numeroAtualDeBlocos = event.target.value;
    this.setState({numeroDeBlocos: numeroAtualDeBlocos});
  }

  render(){

    let lista = [];

    for(let i = 0; i < this.state.numeroDeBlocos; i++){
      lista.push(<CaixaPreta key={i} />);
    }

    return (
      <div>
        <input 
          type="number"
          value={this.state.numeroDeBlocos}
          onChange={this.aoMudarNumeroBlocos}
        />
        <hr/>
        <SmallContainer> {lista} </SmallContainer>
      </div>
    );
  }
}

export default App;
