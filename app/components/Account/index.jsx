import React from 'react'

// Material UI imports
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

// Import components
import Navbar from '../Navbar'

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
    fontWeight: 'normal',
  },
  // errorStyle: {
  //   textAlign: 'center',
  // }
}

// Component Style
import style from './style.less'

class Account extends React.Component {
	constructor(props) {
		super()
		this.state = {
      password: "",
      confPassword: "",
      oldPassword: "",
		}
		this.deleteAction = this.deleteAction.bind(this)
		this.changePasswordAction = this.changePasswordAction.bind(this)
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this)
    this.handleNewConfPasswordChange = this.handleNewConfPasswordChange.bind(this)
    this.handleOldPassword = this.handleOldPassword.bind(this)
  }

  handleNewPasswordChange(event){
    this.setState({
			password: event.target.value
		})
  }

  handleNewConfPasswordChange(event){
    this.setState({
			confPassword: event.target.value
		})
  }

  handleOldPassword(event){
    this.setState({
			oldPassword: event.target.value
		})
  }

	changePasswordAction(event){
		// Call preventDefault() on the event to prevent the browser's default
		// action of submitting the form.
		event.preventDefault();

    this.setState({
      inputError: "",
      passwordError: "",
      oldPasswordError: ""
    })

    const password = this.state.password;
    const confPassword = this.state.confPassword;
    const oldPassword = this.state.oldPassword;

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

    if (!oldPassword) {
      this.setState({
				oldPasswordError: "All fields must be filled."
			})
    }

    // if (oldPassword == "old password")
    // {
    //
    // }

		let reqInputs = [password];

		if (validateForm(reqInputs)) {
			let formData = {
        password: password,
			}

		} else {
			this.setState({
				inputError: "All fields must be filled.",
        passwordError: "All fields must be filled.",
        oldPasswordError: "All fields must be filled."
			})
		}
	}

	deleteAction(){
		console.log("deleted");
	}

  render (){
		return (
	  	<div className={style.account}>
				<Navbar {...this.props}/>

				<div className={style.container}>
					<h3>Change Password</h3>
          <p>Please insert new password, confirmation and your current password.</p>
          <div>
            <TextField
              autoCorrect="none"
              autoCapitalize="none"
              hintText="********"
              type="password"
              floatingLabelText="New Password"
              errorText={this.state.passwordError}
              value={this.state.password}
              className={style.textFieldStyle}
              onChange={this.handleNewPasswordChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>
          </div>
          <div>
            <TextField
              autoCorrect="none"
              autoCapitalize="none"
              hintText="********"
              type="password"
              floatingLabelText="Confirm New Password"
              errorText={this.state.passwordError}
              value={this.state.confPassword}
              className={style.textFieldStyle}
              onChange={this.handleNewConfPasswordChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>
          </div>
          <div>
            <TextField
              autoCorrect="none"
              autoCapitalize="none"
              hintText="********"
              type="password"
              floatingLabelText="Current Password"
              errorText={this.state.oldPasswordError}
              value={this.state.oldPassword}
              className={style.textFieldStyle}
              onChange={this.handleOldPassword}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>
          </div>

					<FlatButton
		        label="CHANGE PASSWORD"
		        style={{color: "#fff", marginTop: "30px"}}
						backgroundColor="#37BDD5"
		        onClick={this.changePasswordAction}
		      />
				</div>

				<div className={style.container}>
					<h3>Delete Account</h3>
					<p>You may delete your account at any time. However, this action is irreversibile.</p>
					<FlatButton
		        label="I UNDERSTAND, DELETE MY ACCOUNT"
		        style={{color: "#fff", marginTop: "20px"}}
						backgroundColor="#f00"
		        onClick={this.deleteAction}
		      />
				</div>
	  	</div>
	  )
	}
}

export default Account
