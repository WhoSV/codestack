import React from 'react'

// Material UI imports
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

// Import components
import Navbar from '../Navbar'

// Import static icons
import { img } from '../../static'

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
    fontWeight: 'normal',
  },
  uploadButtonStyle: {
    verticalAlign: 'middle',
  },
  uploadInputStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  uploadButtonLabelStyle: {
    color: '#4A4A4A',
  }
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
      dialogDelete: false,
		}
    this.changePasswordAction = this.changePasswordAction.bind(this)
    this.handleDeleteAccount = this.handleDeleteAccount.bind(this)
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

  dialogDelete() {
    this.setState({
      dialogDelete: true
    })
  }

  handleDeleteAccount() {
    this.setState({
      dialogDelete: true,
    })
  }

  dialogClose() {
    this.setState({
      dialogDelete: false,
    })
  }

  confirmDeleteAccount(){
    console.log("confirm delete");
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

    // here call current password validation

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

  render (){
    const deleteActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Delete"
        style={{color: "#ff0000"}}
        primary={true}
        onTouchTap={this.confirmDeleteAccount.bind(this)}
      />,
    ]

		return (
	  	<div className={style.account}>
				<Navbar {...this.props}/>

        <div className={style.container}>
          <h3>Account Information</h3>

          <TextField
            autoCorrect="none"
            autoCapitalize="none"
            hintText="Jon Doe"
            type="text"
            floatingLabelText="Name & Surname"
            errorText={this.state.inputError}
            value={this.state.name}
            className={style.textFieldStyle}
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
            className={style.textFieldStyle}
            onChange={this.handleEmailChange}
            floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

          <div className={style.pictureContainer}>
            <p>Profile Picture</p>
            <img className={style.pictureStyle} src={img.logo}/>

            <FlatButton
              label="Choose an Image"
              labelPosition="before"
              style={muiStyle.uploadButtonStyle}
              labelStyle={muiStyle.uploadButtonLabelStyle}
              containerElement="label">
                <input type="file" style={muiStyle.uploadInputStyle} />
            </FlatButton>
          </div>

          <FlatButton
		        label="SAVE CHANGES"
		        style={{color: "#fff", marginTop: "30px"}}
						backgroundColor="#37BDD5"
		        // onClick={this.changePasswordAction}
		      />
        </div>

        <div className={style.container}>
					<h3>Change Password</h3>
          <p>Please insert new password, confirmation and your current password.</p>

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

					<FlatButton
		        label="CHANGE PASSWORD"
		        style={{color: "#fff", marginTop: "30px"}}
						backgroundColor="#37BDD5"
		        onClick={this.changePasswordAction}/>
				</div>

				<div className={style.container}>
					<h3>Delete Account</h3>
					<p>You may delete your account at any time. However, this action is irreversibile.</p>
					<FlatButton
		        label="I UNDERSTAND, DELETE MY ACCOUNT"
		        style={{color: "#fff", marginTop: "20px"}}
						backgroundColor="#f00"
		        onClick={this.handleDeleteAccount}/>
				</div>

        {/* Delete account dialog */}
        <Dialog
          className={style.dialog}
          title="Delete Account"
          actions={deleteActions}
          modal={false}
          open={this.state.dialogDelete}
          onRequestClose={this.dialogClose.bind(this)}>
            Do you realy want to delete your account?
        </Dialog>
	  	</div>
	  )
	}
}

export default Account
