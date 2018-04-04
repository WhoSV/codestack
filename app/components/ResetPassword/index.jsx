import React from 'react'

// Material UI imports
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import Dialog from 'material-ui/Dialog'

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
    fontWeight: 'normal'
  },
  submitButton: {
    marginTop: 20,
    width: 260,
    marginBottom: 50
  },
  submitButtonText: {
    color: '#4A90E2'
  },
  backButtonText: {
    color: '#30CFD0'
  },
  dialogTitleStyle: {
    color: '#4A90E2',
  }
}

// Component Actions
import {resetPassword} from './actions'

// Component Style
import style from './style.less'

// Import static Resources
import {img} from '../../static'

class ResetPassword extends React.Component {
  constructor(props) {
    super()
    this.state = {
      email: "",
      dialogAlert: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBack = this.handleBack.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    this.setState({
      inputError: ""
    })

    const email = this.state.email;
    const that = this;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == "") {
          return false
        }
      }
      return true
    }

    let reqInputs = [email];

    if (validateForm(reqInputs)) {
      let formData = {
        email: email
      }

    resetPassword(formData, () => {
      this.setState({
        dialogAlert: true
      })
    }, (error) => {
      that.setState({
        inputError: "Please enter correct email."
      })
    })

    } else {
      this.setState({
        inputError: "Please enter correct email."
      })
    }
  }

  handleBack() {
    this.props.history.push('/')
  }

  render() {
    const alertActions = [
      <FlatButton
        label="Continue"
        style={{color: "#4A90E2"}}
        primary={true}
        onTouchTap={this.handleBack}
      />
    ]

    return (
      <div className={style.bgStyle}>
        <div className={style.resetPassword}>
          <Paper zDepth={5}>
            <img className={style.logoImg} src={img.logo}/>
            <h1 className={style.title}>Reset Password</h1>
            <h5>Password will be sent to your email</h5>

            <form onSubmit={this.handleSubmit}>
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
              <br/>

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

        {/* Reset Password Dialog */}
        <Dialog
          title="Success"
          titleStyle={muiStyle.dialogTitleStyle}
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}>
            The password has been sent to your email!
        </Dialog>
      </div>
    )
  }
}

export default ResetPassword
