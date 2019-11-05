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

const SubsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
  flex-grow: 1;
`

class Subscriptions extends React.Component {
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
              <SubsList>
                AQUI IRÃO APARECER AS VIAGENS E OS SEUS RESPECTIVOS INSCRITOS!
              </SubsList>
          </WrapperControlPanel>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          goBackToControlPanel: () => dispatch(push(routes.controlPanel))
      }
  }
  
  export default connect(null, mapDispatchToProps)(Subscriptions);