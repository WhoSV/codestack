import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI imports
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
		fontWeight: 'normal',
	},
  submitButton: {
    marginTop: 20,
    width: 260,
    marginBottom: 50,
  },
  submitButtonText: {
		color: '#4A90E2'
	},
  backButtonText: {
    color: '#30CFD0',
  },
  errorStyle: {
    textAlign: 'center',
  }
}

// Component Style
import style from './style.less'

// Import static Resources
import { img } from '../../static'

class Register extends React.Component {
	constructor(props) {
		super();
		this.state = {
      name: "",
      email: "",
      type: "",
      password: "",
      confPassword: "",
		}
    this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfPasswordChange = this.handleConfPasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleNameChange(event){
		this.setState({
			name: event.target.value
		})
	}

	handleEmailChange(event){
		this.setState({
			email: event.target.value
		})
	}

  handleTypeChange(event, index, value){
    this.setState({
			type: value
		})
  }

  handlePasswordChange(event){
    this.setState({
			password: event.target.value
		})
  }

  handleConfPasswordChange(event){
    this.setState({
			confPassword: event.target.value
		})
  }

	handleSubmit(event){
		// Call preventDefault() on the event to prevent the browser's default
		// action of submitting the form.
		event.preventDefault();

    this.setState({
      inputError: "",
      passwordError: ""
    })

    const name = this.state.name;
		const email = this.state.email;
    const type = this.state.type;
    const password = this.state.password;
    const confPassword = this.state.confPassword;

		let validateForm = function(arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == null || arr[i] == "") {
					return false
				}
			}
			return true
		}

    if (password != confPassword) {
      this.setState({
				passwordError: "Passwords are not identical"
			})
    }

		let reqInputs = [name, email, type, password];

		if (validateForm(reqInputs)) {
			let formData = {
        name: name,
				email: email,
        type: type,
        password: password,
			}

		} else {
			this.setState({
				inputError: "All fields must be filled.",
        passwordError: "All fields must be filled."
			})
		}
	}

  handleBack(){
    this.props.history.push('/')
  }

  render (){
		return (
	  	<div className={style.register}>
				<Paper zDepth={5}>
  				<img className={style.logoImg} src={img.logo}/>
  				<h3 className={style.title}>Register New Account</h3>

          <form onSubmit={this.handleSubmit}>
            <TextField
              autoCorrect="none"
              autoCapitalize="none"
              hintText="Jon Doe"
              type="text"
              floatingLabelText="Name & Surname"
              errorText={this.state.inputError}
              value={this.state.name}
              className={style.textField}
              onChange={this.handleNameChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

            <TextField
              autoCorrect="none"
              autoCapitalize="none"
              hintText="mark2019@gmail.com"
              type="email"
              floatingLabelText="Email"
              errorText={this.state.inputError}
              value={this.state.email}
              className={style.textField}
              onChange={this.handleEmailChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

            <SelectField
              floatingLabelText="Type"
              value={this.state.type}
              className={style.selectField}
              errorText={this.state.inputError}
              errorStyle={muiStyle.errorStyle}
              onChange={this.handleTypeChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}>
                <MenuItem value={1} primaryText="Student" />
                <MenuItem value={2} primaryText="Teacher" />
            </SelectField>

            <TextField
							autoCorrect="none"
							autoCapitalize="none"
	  					hintText="********"
	  					type="password"
	  					floatingLabelText="Password"
	  					errorText={this.state.passwordError}
	  					value={this.state.password}
							className={style.textField}
	  					onChange={this.handlePasswordChange}
	  					floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

            <TextField
							autoCorrect="none"
							autoCapitalize="none"
	  					hintText="********"
	  					type="password"
	  					floatingLabelText="Confirm Password"
	  					errorText={this.state.passwordError}
	  					value={this.state.confPassword}
							className={style.textField}
	  					onChange={this.handleConfPasswordChange}
	  					floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>
              <br />

            <FlatButton
	  					type="submit"
	  					label="Register"
							backgroundColor="#F3F3F3"
	  					style={muiStyle.submitButton}
	  					labelStyle={muiStyle.submitButtonText}/>
          </form>

          <div className={style.backContainer}>
            <FlatButton
              type="submit"
              label="Back"
              style={muiStyle.backButton}
              onClick={this.handleBack}
              labelStyle={muiStyle.backButtonText}/>
          </div>
				</Paper>
	  	</div>
	  )
	}
}

export default Register
