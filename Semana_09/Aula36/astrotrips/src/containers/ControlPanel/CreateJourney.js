import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { push, goBack } from 'connected-react-router';
import { routes } from '../Router';
import ReplyIcon from '@material-ui/icons/Reply';

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

const CreateTripForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
  flex-grow: 1;
`

class CreateJourney extends React.Component {
    constructor(props) {
      super(props);
    }    
  
    render() {
      return (
          <WrapperControlPanel>
              <AppHeader>
                <Button onClick={this.props.goBackToControlPanel}>
                  <ReplyIcon/>
                </Button>
                <h2>Oi, estou na tela de criação de viagens!</h2>
              </AppHeader>
              <CreateTripForm>
                AQUI VAI O FORMULÁRIO DE CRIAÇÃO DE UMA NOVA VIAGEM!
              </CreateTripForm>
          </WrapperControlPanel>
         
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          goBackToControlPanel: () => dispatch(push(routes.controlPanel))
      }
  }
  
  export default connect(null, mapDispatchToProps)(CreateJourney);