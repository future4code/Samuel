import React from 'react';
import { Button, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';
import styled from "styled-components";
import ReplyIcon from '@material-ui/icons/Reply';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { getTrips } from '../../actions/trips';

const Wrapper = styled.div`
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow:1;
  width: 100%;
  padding: 0 20%;
  margin: 5% auto;
  background-color: lightyellow;
`

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;  
  flex-grow: 1;
  `

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tripId: "",
        country : ""
      }
    }

    componentDidMount(){
      this.props.getTrips();
    }

    handleFieldChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
    
    render() {

      const tripList = this.props.tripList;
      const trips = tripList.map((trip) =>{
          return (
              <MenuItem value={trip.id}>
                  {`${trip.name} - ${trip.planet}`}
              </MenuItem>
              )
      })

      return (
        <Wrapper>
              <AppHeader>
                <Button onClick={this.props.goHome}>
                  <ReplyIcon/>
                </Button>
                <h2>| HOME 🡢 INSCREVA-SE</h2>
              </AppHeader>
              <SubForm>
                <StyledForm onSubmit={this.handleSubmit}>
                  <StyledFormControl>
                    <InputLabel htmlFor="trip">Escolha uma viagem:</InputLabel>
                    <Select
                      fullWidth
                      inputProps={{ name: 'trip', id: 'trip' }}
                      value={this.state.tripId}
                      onChange={this.handleFieldChange}
                    >
                      {trips}
                    </Select>
                  </StyledFormControl>
                  <StyledFormControl>
                    <TextField fullWidth required name="name" inputProps={{ pattern: "^[a-zA-Z]{3,}" }} label="Nome (mín. 3 caracteres)" />
                    <TextField fullWidth required name="profession" inputProps={{ pattern: "^[a-zA-Z]{30,}" }} label="Profissão (mín. 10 caracteres)" />
                    <TextField fullWidth required name="motivation" inputProps={{ pattern: "^[a-zA-Z]{30,}" }} label="Motivação (mín. 30 caracteres)" />
                    <TextField fullWidth required name="duration" type="number" inputProps={{ min: "18" }} label="Idade (mín. 18 anos)" />
                  </StyledFormControl>
                  <StyledFormControl>
                    <InputLabel htmlFor="country">País:</InputLabel>
                    <Select
                      fullWidth
                      inputProps={{ name: 'country', id: 'country' }}
                      value={this.state.country}
                      onChange={this.handleFieldChange}
                    >
                      <MenuItem value="brasil">Brasil</MenuItem>
                      <MenuItem value="canada">Canadá</MenuItem>
                      <MenuItem value="eua">Estados Unidos</MenuItem>
                    </Select>
                  </StyledFormControl>
                  <Button color="primary" variant="contained" type="submit">CRIAR NOVA VIAGEM</Button>
                </StyledForm>
              </SubForm>
          </Wrapper>
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
          getTrips: () => dispatch(getTrips())
      }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);