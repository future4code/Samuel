import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { push } from 'connected-react-router';
import { routes } from '../Router';

const FullDetaisCanvas = styled.div`
  background-color: lightcoral;
  border: 1px solid black;
  display: flex;
  height: 100%;  
`

const StyledTrips = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 1%;
    padding: 0;
`

const StyledCard = styled(Card)`
    margin: 5%;
`

class TripsList extends React.Component {

    constructor(props){
        super(props);
        //aqui devem aparecer todas as viagens
    }

    render(){

        const tripList = this.props.tripList;
        console.log("lista de viagens: ", tripList)

        const trips = tripList.map((trip) =>{
            return (
                <li key={trip.id}>
                    <StyledCard>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {trip.date}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {trip.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    {`Duração: ${trip.durationInDays} dias`}
                                </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={this.props.goToTripDetails}>+ informações e candidatos</Button>
                        </CardActions>
                    </StyledCard>
                </li>
                )
        })
        return (
            <FullDetaisCanvas>
                <StyledTrips>
                    {trips}
                </StyledTrips>
            </FullDetaisCanvas>
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
        goToTripDetails: () => dispatch(push(routes.tripDetails)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsList);