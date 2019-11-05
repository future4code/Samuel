import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import styled from "styled-components";
import HomeIcon from '@material-ui/icons/Home';

const WrapperControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  margin: 0 auto;
`

const AppHeader = styled.div`
  display: flex;
  background-color: lightskyblue;
`

const SubForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
  flex-grow: 1;
`

class Inscricao extends React.Component {
    constructor(props) {
      super(props);     
    }    
  
    render() {
      return (
        <WrapperControlPanel>
              <AppHeader>
                <Button onClick={this.props.goHome}>
                  <HomeIcon/>
                </Button>
                <h2>Oi, estou na página de inscrição!</h2>
              </AppHeader>
              <SubForm>
                AQUI VAI O FORMULÁRIO DE INSCRIÇÃO NUMA VIAGEM SELECIONADA!
              </SubForm>              
          </WrapperControlPanel>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          goHome: () => dispatch(push(routes.root))
      }
  }
  
  export default connect(null, mapDispatchToProps)(Inscricao);