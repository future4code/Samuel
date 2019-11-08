import React from 'react';
import styled from 'styled-components';
import { Button, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import { push, goBack } from 'connected-react-router';
import { routes } from '../Router';
import ReplyIcon from '@material-ui/icons/Reply';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const WrapperControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 70%;
  margin: 0 auto;
`

const AppHeader = styled.div`
  display: flex;
  background-color: lightsalmon;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow:1;
  padding: 0 20%;
  background-color: bisque;
`

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  
  flex-grow: 1;
  `

class CreateJourney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      duration: "",
      date: "",
      planet: ""
    }
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSelectChange = (event) => {
    console.log("conteudo de event:", event.target.value)
    this.setState({planet: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Viagem criada com sucesso!");
    this.cleanFields();
  }

  cleanFields = () => {
    //limpar os campos do formulário, caso a viagem tenha sido criada com sucesso
  }

  render() {
    
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minDate = new Date(tomorrow).toISOString().substr(0, 10);

    return (
      <WrapperControlPanel>
        <AppHeader>
          <Button onClick={this.props.goBackToControlPanel}>
            <ReplyIcon />
          </Button>
          <h2>| PAINEL DE CONTROLE 🡢 CRIAR VIAGEM</h2>
        </AppHeader>
        
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledFormControl>
            <TextField fullWidth required name="name" inputProps={{ pattern: "^[a-zA-Z]{5,}" }} label="Nome da viagem (mín. 5 caracteres)" />
            <TextField fullWidth required name="desc" inputProps={{ pattern: "^[a-zA-Z]{30,}" }} label="Descrição (mín. 30 caracteres)" />
            <TextField fullWidth required name="duration" type="number" inputProps={{ min: "50" }} label="Duração (mín. 50 dias)" />
            <TextField fullWidth required name="date" type="date" label="Data" inputProps={{min: minDate}} InputLabelProps={{ shrink: true }} />
          </StyledFormControl>
          <StyledFormControl>
              <InputLabel htmlFor="planet">Escolha um planeta</InputLabel>
              <Select 
                fullWidth 
                inputProps={{name: 'planet', id: 'planet'}} 
                value={this.state.planet} 
                onChange={this.handleFieldChange}
              >
                <MenuItem value="jupiter">Júpiter</MenuItem>
                <MenuItem value="marte">Marte</MenuItem>
                <MenuItem value="mercurio">Mercúrio</MenuItem>
                <MenuItem value="netuno">Netuno</MenuItem>
                <MenuItem value="saturno">Saturno</MenuItem>
                <MenuItem value="terra">Terra</MenuItem>
                <MenuItem value="urano">Urano</MenuItem>
                <MenuItem value="venus">Vênus</MenuItem>
              </Select>
            <Button color="primary" variant="contained" type="submit">CRIAR NOVA VIAGEM</Button>
          </StyledFormControl>
        </StyledForm>


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