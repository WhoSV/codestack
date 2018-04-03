import React from 'react'

// Material UI imports
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog'

// Import components
import Navbar from '../Navbar'

// Import static icons
import {img} from '../../static'

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
    fontWeight: 'normal'
  },
  uploadButtonStyle: {
    verticalAlign: 'middle'
  },
  uploadInputStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  },
  uploadButtonLabelStyle: {
    color: '#4A4A4A'
  }
}

// Component Style
import style from './style.less'

// Component Actions
import {deleteUser, updateUser, getUser, updateUserPassword} from './actions'

class Account extends React.Component {
  constructor(props) {
    super()
    this.state = {
      id: "",
      name: "",
      email: "",
      password: "",
      confPassword: "",
      oldPassword: "",
      dialogDelete: false,
      deleteUser: {},
      dialogSuccess: false
    }
    this.changeAccountInfo = this.changeAccountInfo.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.changePasswordAction = this.changePasswordAction.bind(this)
    this.handleDeleteAccount = this.handleDeleteAccount.bind(this)
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this)
    this.handleNewConfPasswordChange = this.handleNewConfPasswordChange.bind(this)
    this.handleOldPassword = this.handleOldPassword.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentWillMount() {
    this.state.id = localStorage.id
    this.activeUser()
  }

  activeUser() {
    getUser(this.state.id, (data) => {
      this.setState({
        id: data.id,
        name: data.full_name,
        email: data.email
      });
    })
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleNewPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleNewConfPasswordChange(event) {
    this.setState({
      confPassword: event.target.value
    })
  }

  handleOldPassword(event) {
    this.setState({
      oldPassword: event.target.value
    })
  }

  handleDeleteAccount() {
    this.setState({
      dialogDelete: true
    })
  }

  dialogClose() {
    this.setState({
      dialogDelete: false
    })
  }

  confirmDeleteAccount() {
    deleteUser(this.state.id, (res) => {
      this.setState({
        deleteUser: {}
      })
      this.props.history.push('/signout')
    })
  }

  changeAccountInfo(event) {
    event.preventDefault();

    this.setState({
      inputAccError: ""
    })

    const id = this.state.id;
    const name = this.state.name;
    const email = this.state.email;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == "") {
          return false
        }
      }
      return true
    }

    let reqInputs = [id, name, email];

    if (validateForm(reqInputs)) {
      let formData = {
        id: id,
        full_name: name,
        email: email
      }

    updateUser(formData, () => {})

    } else {
      this.setState({
        inputAccError: "All fields must be filled."
      })
    }
  }

  changePasswordAction(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    this.setState({
      inputError: "",
      passwordError: "",
      oldPasswordError: ""
    })

    const id = this.state.id;
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

    let reqInputs = [id, oldPassword, password];

    if (validateForm(reqInputs)) {
      let formData = {
        id: id,
        new_password: password,
        password: oldPassword
      }

      updateUserPassword(formData, () => {
        this.setState({
          dialogSuccess: true
        })
      })

    } else {
      this.setState({
        inputError: "All fields must be filled.",
        passwordError: "All fields must be filled.",
        oldPasswordError: "All fields must be filled."
      })
    }
  }

  handleSignOut() {
    this.props.history.push('/signout')
  }

  render() {
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
      />
    ]

    const successActions = [
      <FlatButton
        label="Continue"
        style={{color: "#4CAF50"}}
        primary={true}
        onTouchTap={this.handleSignOut}
      />
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
            errorText={this.state.inputAccError}
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
            errorText={this.state.inputAccError}
            value={this.state.email}
            className={style.textFieldStyle}
            onChange={this.handleEmailChange}
            floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

          <FlatButton
            label="SAVE CHANGES"
            style={{color: "#fff",marginTop: "30px"}}
            backgroundColor="#37BDD5"
            onClick={this.changeAccountInfo}/>
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

        {/* Updated User Password Dialog */}
        <Dialog
          title="Success"
          titleStyle={muiStyle.dialogTitleStyle}
          actions={successActions}
          modal={false}
          open={this.state.dialogSuccess}>
            Your password has been updated successfully, please login to continue!.
        </Dialog>
      </div>
    )
  }
}

export default Account
