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
    marginBottom: 50,
  },
  submitButtonText: {
		color: '#4A90E2'
	},
  backButtonText: {
    color: '#30CFD0',
  }
}

// Component Style
import style from './style.less'
import logo from './img/logo.png'

class ResetPassword extends React.Component {
	constructor(props) {
		super();
		this.state = {
      mail: "",
		}
		this.handlemailChange = this.handlemailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

	handlemailChange(event){
		this.setState({
			mail: event.target.value
		})
	}

	handleSubmit(event){
		// Call preventDefault() on the event to prevent the browser's default
		// action of submitting the form.
		event.preventDefault();

		const mail = this.state.mail;

		let validateForm = function(arr) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == null || arr[i] == "") {
					return false
				}
			}
			return true
		}

		let reqInputs = [mail];

		if (validateForm(reqInputs)) {
			let formData = {
				mail: mail,
			}

		} else {
			this.setState({
				inputError: "Please enter correct email."
			})
		}
	}

  handleBack(){
    this.props.history.push('/signin')
  }

  render (){
		return (
	  	<div className={style.resetPassword}>
				<Paper zDepth={5}>
  				<img className={style.logoImg} src={logo}/>
  				<h1 className={style.title}>Reset Password</h1>
          <h5>Password will be sent to your email</h5>

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
            <br />

            <FlatButton
	  					type="submit"
	  					label="Send"
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

export default ResetPassword
