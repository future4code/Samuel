import React from 'react';
import * as firebase from "firebase/app";
import { Link, Redirect } from 'react-router-dom';
import { setUsername } from '../firebase';

class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}	

	onChangeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmitLogin = async (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(res => {
			console.log("Usuário logado com sucesso:", res);
		}).catch(err => {
			console.log("Erro ao fazer login:", err);
		});
    }
    
    onGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            console.log("Resultado Google:", result)
            return setUsername(result.user.uid, result.user.displayName)
        }).catch(function(error) {
            console.log("Erro Google login:", error)
        });
    }

	render() {
        
        if(this.props.isLoggedIn){
            return <Redirect to={{ pathname: '/signup' }} />
        }

		return (
			<div>
				<form onSubmit={this.onSubmitLogin}>
					<input
						placeholder={'Email'}
						value={this.state.email}
						onChange={this.onChangeInput}
						name={'email'}
					/>
					<input
						placeholder={'Senha'}
						value={this.state.password}
						onChange={this.onChangeInput}
						name={'password'}
					/>
					<button> Enviar </button>
                    <button type={'button'} onClick={this.onGoogleLogin}>Login com o Google</button>
                    <Link to={'/signup'}>
                        <button>Cadastrar</button>
                    </Link>
				</form>
			</div>
		);
	}
}

export default HomePage;
