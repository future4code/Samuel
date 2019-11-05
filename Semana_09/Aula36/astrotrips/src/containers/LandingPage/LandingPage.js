import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';


const LandingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    margin: 50px auto;
`

class LandingPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }    
  
    render() {
      return (
          <LandingWrapper>
              <img src="https://picsum.photos/600/400" alt=""/>
              <h1>ASTROTRIPS - SPACE TRIPS</h1>
              <div>
                <Button variant="contained" color="primary" onClick={this.props.goToLogin}>LOGIN</Button>
                <Button variant="contained" color="primary" onClick={this.props.goToRegister}>VIAGENS</Button>
              </div>
          </LandingWrapper>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
          goToLogin: () => dispatch(push(routes.login)),
          goToRegister: () => dispatch(push(routes.register)),
      }
  }
  
  export default connect(null, mapDispatchToProps)(LandingPage);