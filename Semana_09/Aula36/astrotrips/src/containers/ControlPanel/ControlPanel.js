import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import HomeIcon from '@material-ui/icons/Home';
import { getTrips } from '../../actions/trips';

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
const ControlPanelMain = styled.div`
  flex-grow: 1;
  display: flex;
`

const AdmMenu = styled.div`
  border: 1px solid black;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: bisque;
`

const MostraViagens = styled.div`
  background-color: beige;
  width: 80%;
  border: 1px solid black;
`

class ControlPanel extends React.Component {
    constructor(props) {
      super(props);
    }
    
    componentDidMount(){
      this.props.getTrips();
    }
  
    render() {
      //console.log("Trip List", this.props.tripList)
      return (
          <WrapperControlPanel>
              <AppHeader>
                <Button onClick={this.props.goHome}>
                  <HomeIcon/>
                </Button>
                <h2>| PAINEL DE CONTROLE</h2>
              </AppHeader>
              <ControlPanelMain>
                <AdmMenu>
                  <Button variant="contained" color="primary" onClick={this.props.goToCreateTrip}>CRIAR NOVA VIAGEM</Button>
                  {/* <Button variant="contained" color="primary" onClick={this.props.goToSubscriptions}>VER INSCRIÇÕES</Button> */}
                </AdmMenu>
                <MostraViagens>
                  <h4>TRIP LIST PLACEHOLDER {`(onde todas as viagens irão aparecer - apenas os nomes!!!)`}</h4>
                  <div>
                    <button onClick={this.props.seeFullDetails}>UMA VIAGEM QUALQUER</button>
                  </div>
                </MostraViagens>
              </ControlPanelMain>
          </WrapperControlPanel>
         
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      tripList: state.trips.tripList
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          goHome: () => dispatch(push(routes.root)),
          goToCreateTrip: () => dispatch(push(routes.createTrip)),
          // goToSubscriptions: () => dispatch(push(routes.subscriptions)),
          seeFullDetails: () => dispatch(push(routes.tripFullDetails)),
          getTrips: () => dispatch(getTrips())
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);