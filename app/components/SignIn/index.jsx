import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI imports
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

// Material UI Styles
const muiStyle = {
	floatingLabelTextStyle: {
		fontWeight: 'normal',
	},
	submitButton: {
		marginTop: 20,
		width: 260,
	},
	submitButtonText: {
		color: '#4A90E2'
	},
	buttonText: {
		fontWeight: '100',
		color: '#fff',
		textTransform: 'normal',
		fontSize: '12px',
	},
}

// Component Style
import style from './style.less'
import backgroundImg from './img/bg.png'
import logo from './img/logo.png'

class Signin extends React.Component {
	constructor(props) {
		super();
		this.state = {
			mail: "",
			password: "",
		}
		this.handlemailChange = this.handlemailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleForgotPassword = this.handleForgotPassword.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
  }

	handlemailChange(event){
		this.setState({
			mail: event.target.value
		})
	}

	handlePasswordChange(event){
		this.setState({
			password: event.target.value
		})
	}

	handleSubmit(event){
		// Call preventDefault() on the event to prevent the browser's default
		// action of submitting the form.
		event.preventDefault();

		this.setState({
			inputError: "",
		})

		const mail = this.state.mail;
		const password = this.state.password;

		let validateForm = function(arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == null || arr[i] == "") {
					return false
				}
			}
			return true
		}

		let reqInputs = [mail, password];

		if (validateForm(reqInputs)) {
			let formData = {
				mail: mail,
				password: password
			}

		} else {
			this.setState({
				inputError: "Email or password are incorect."
			})
		}
	}

	handleForgotPassword(){
		this.props.history.push('/reset')
	}

	handleRegister(){
		this.props.history.push('/register')
	}

  render (){
		return (
	  	<div className={style.signin}>
				<Paper zDepth={5}>
					<img className={style.logoImg} src={logo}/>
					<h1 className={style.title}>CodeStack</h1>
					<form onSubmit={this.handleSubmit}>
	  				<TextField
							autoCorrect="none"
							autoCapitalize="none"
							hintText="mark2019@gmail.com"
	  					type="text"
	  					floatingLabelText="Email"
	  				  errorText={this.state.inputError}
	  					value={this.state.mail}
							className={style.textField}
	  					onChange={this.handlemailChange}
	  					floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

	  				<TextField
							autoCorrect="none"
							autoCapitalize="none"
	  					hintText="********"
	  					type="password"
	  					floatingLabelText="Password"
	  					errorText={this.state.inputError}
	  					value={this.state.password}
							className={style.textField}
	  					onChange={this.handlePasswordChange}
	  					floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>
	  				<br />

	  				<FlatButton
	  					type="submit"
	  					label="LogIn"
							backgroundColor="#F3F3F3"
	  					style={muiStyle.submitButton}
	  					labelStyle={muiStyle.submitButtonText}/>
					</form>

					<div className={style.bottomDiv} style={{backgroundImage: "url(" + backgroundImg + ")"}}>
						<FlatButton
	  					type="submit"
	  					label="Forgot password?"
	  					style={muiStyle.submitButton}
							onClick={this.handleForgotPassword}
	  					labelStyle={muiStyle.buttonText}/>
						<FlatButton
	  					type="submit"
	  					label="Register"
	  					style={muiStyle.submitButton}
							onClick={this.handleRegister}
	  					labelStyle={muiStyle.buttonText}/>
					</div>
				</Paper>
	  	</div>
	  )
	}
}

export default Signin
