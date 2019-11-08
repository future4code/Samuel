import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
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

const FullDetaisCanvas = styled.div`
  background-color: beige;
  border: 1px solid black;
  flex-grow: 1;
  padding: 5%;
`

class TripDetails extends React.Component {  

    render() {

        return (
            <WrapperControlPanel>
                <AppHeader>
                    <Button onClick={this.props.goHome}>
                        <ReplyIcon />
                    </Button>
                    <h2>| PAINEL DE CONTROLE</h2>
                </AppHeader>
                <FullDetaisCanvas>
                    {`acrescenter informações detalhadas da viagem selecionada aqui`}
                </FullDetaisCanvas>
            </WrapperControlPanel>
        )
    }
  }

  const mapStateToProps = (state) => {
    return {
        
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          goHome: () => dispatch(push(routes.controlPanel)),
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);