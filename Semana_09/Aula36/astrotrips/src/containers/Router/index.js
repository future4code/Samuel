import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import LandingPage from "../LandingPage/LandingPage";
import Register from "../Register/Register";
import ControlPanel from "../ControlPanel/ControlPanel";
import CreateJourney from "../ControlPanel/CreateJourney";
import Subscriptions from "../ControlPanel/Subscriptions";
import TripDetails from "../../containers/Trip/TripDetails";

export const routes = {
  root: "/",
  login: "/loginPage",
  register: "/register",
  controlPanel: "/controlPanel",
  createTrip: "/createJourney",
  subscriptions: "/subs",
  tripDetails: "/tripDetails"
  
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LandingPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.register} component={Register} />
        <Route path={routes.controlPanel} component={ControlPanel} />
        <Route path={routes.createTrip} component={CreateJourney} />
        <Route path={routes.subscriptions} component={Subscriptions} />
        <Route path={routes.tripDetails} component={TripDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
