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

const FullDetailedTrip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightseagreen;
  flex-grow: 1;
`

class TripFullDetails extends React.Component {
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
                <h2>Oi, estou na tela de visualização de inscrições!</h2>
              </AppHeader>
              <FullDetailedTrip>
                AQUI IRÁ APARECER A VIAGEM, COM TODOS OS DETALHES E OS SEUS RESPECTIVOS INSCRITOS, bem como as opções de aceitar ou rejeitá-los!
              </FullDetailedTrip>
          </WrapperControlPanel>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          goBackToControlPanel: () => dispatch(push(routes.controlPanel))
      }
  }
  
  export default connect(null, mapDispatchToProps)(TripFullDetails);