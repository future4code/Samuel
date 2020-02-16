import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import HomePage from './containers/HomePage';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import SignUpPage from './containers/Signup';

class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			messages: [],
			videos: []
		}
	}

	componentDidMount(){
		this.getVideos()
	}

	async getVideos() {
		/*
		const users = (await firebase.firestore().collection('users').get()).docs
		const meusUsers = users.map(user => console.log(`Cód. do usuário: ${user.id} => Dados do usuário:`, user.data()))
		*/
		const videos = (await firebase.firestore().collection('videosUrls').get()).docs		
		const feed = videos.map(video => video.data())
		this.setState({videos: feed})
		/*
		const queryResponse = await firebase.firestore().collection('messages').get()
		const messages = queryResponse.docs.map(doc => doc.data())
		this.setState({messages})
		*/
	}

	render() {
		console.log("Videos do state:", this.state.videos)
		return (
			<div className="App">
				<Router>
					<div>
						<Switch>
							<Route path="/">
								<HomePage />
							</Route>
							<Route path="/signup">
								<SignUpPage />
							</Route>
							{/* <Route path="/home">
								<HomePage isLoggedIn={this.state.isLoggedIn}/>
							</Route>
							<PrivateRoute isLoggedIn={this.state.isLoggedIn} path="/">
								<HomePage/>
							</PrivateRoute> */}
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
