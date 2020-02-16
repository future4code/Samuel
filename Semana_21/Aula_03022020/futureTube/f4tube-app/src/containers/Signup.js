import React from 'react';
import * as firebase from "firebase/app";
import { setUsername } from '../firebase';

class SignUpPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
            email: '',
            bday: '',
			password: ''
		}
	}	

	onChangeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmitSignup = async (e) => {
		e.preventDefault();
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(res => {
			return setUsername(res.user.uid, this.state.username, this.state.email, this.state.bday);
		}).catch(err => console.log("Erro ao criar usuário:", err));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitSignup}>
					<input
						placeholder={'Nome de usuário'}
						value={this.state.username}
						onChange={this.onChangeInput}
						name={'username'}
					/>
					<input
						placeholder={'Email'}
						value={this.state.email}
						onChange={this.onChangeInput}
						name={'email'}
					/>
                    <input
						placeholder={'Data de nascimento'}
						value={this.state.bday}
						onChange={this.onChangeInput}
						name={'bday'}
					/>
					<input
						placeholder={'Senha'}
						value={this.state.password}
						onChange={this.onChangeInput}
						name={'password'}
						type='password'
					/>
					<button>ENVIAR</button>
				</form>
			</div>
		);
	}
}

export default SignUpPage;
