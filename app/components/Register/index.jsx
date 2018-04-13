import React from 'react';

// Material UI imports
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

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
  errorStyle: {
    textAlign: 'center'
  },
  dialogTitleStyle: {
    color: '#4CAF50'
  }
};

// Component Actions
import { createUser } from './actions';

// Component Style
import style from './style.less';

// Import static Resources
import { img } from '../../static';

class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
      full_name: '',
      mail: '',
      role: 'STUDENT',
      password: '',
      confPassword: '',
      dialogAlert: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfPasswordChange = this.handleConfPasswordChange.bind(this);
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      full_name: event.target.value
    });
  }

  handleMailChange(event) {
    this.setState({
      mail: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleConfPasswordChange(event) {
    this.setState({
      confPassword: event.target.value
    });
  }

  handleCreateUser(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    this.setState({
      inputError: '',
      passwordError: '',
      emailInputError: ''
    });

    const full_name = this.state.full_name;
    const mail = this.state.mail;
    const role = this.state.role;
    const password = this.state.password;
    const confPassword = this.state.confPassword;
    const that = this;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == '') {
          return false;
        }
      }
      return true;
    };

    if (password == confPassword) {
      let reqInputs = [full_name, mail, role, password];

      if (validateForm(reqInputs)) {
        let formData = {
          full_name: full_name,
          email: mail,
          role: role,
          password: password
        };

        createUser(
          formData,
          () => {
            this.setState({
              full_name: '',
              mail: '',
              password: '',
              confPassword: '',
              dialogAlert: true
            });
          },
          error => {
            that.setState({
              emailInputError: 'Email must be unique.'
            });
          }
        );
      } else {
        this.setState({
          inputError: 'All fields must be filled.',
          passwordError: 'All fields must be filled.',
          emailInputError: 'All fields must be filled.'
        });
      }
    } else {
      this.setState({
        passwordError: 'Passwords are not identical'
      });
    }
  }

  handleBack() {
    this.props.history.push('/signout');
  }

  render() {
    const alertActions = [
      <FlatButton
        label="Continue"
        style={{ color: '#4CAF50' }}
        primary={true}
        onTouchTap={this.handleBack}
      />
    ];

    return (
      <div className={style.bgStyle}>
        <div className={style.register}>
          <Paper zDepth={5}>
            <img className={style.logoImg} src={img.logo} />
            <h3 className={style.title}>Register New Account</h3>

            <form onSubmit={this.handleCreateUser}>
              <TextField
                autoCorrect="none"
                autoCapitalize="none"
                hintText="Jon Doe"
                type="text"
                floatingLabelText="Name & Surname"
                errorText={this.state.inputError}
                value={this.state.full_name}
                className={style.textFieldStyle}
                onChange={this.handleNameChange}
                floatingLabelStyle={muiStyle.floatingLabelTextStyle}
              />

              <TextField
                autoCorrect="none"
                autoCapitalize="none"
                hintText="mark2019@gmail.com"
                type="mail"
                floatingLabelText="Email"
                errorText={this.state.emailInputError}
                value={this.state.mail}
                className={style.textFieldStyle}
                onChange={this.handleMailChange}
                floatingLabelStyle={muiStyle.floatingLabelTextStyle}
              />

              <TextField
                autoCorrect="none"
                autoCapitalize="none"
                hintText="********"
                type="password"
                floatingLabelText="Password"
                errorText={this.state.passwordError}
                value={this.state.password}
                className={style.textFieldStyle}
                onChange={this.handlePasswordChange}
                floatingLabelStyle={muiStyle.floatingLabelTextStyle}
              />

              <TextField
                autoCorrect="none"
                autoCapitalize="none"
                hintText="********"
                type="password"
                floatingLabelText="Confirm Password"
                errorText={this.state.passwordError}
                value={this.state.confPassword}
                className={style.textFieldStyle}
                onChange={this.handleConfPasswordChange}
                floatingLabelStyle={muiStyle.floatingLabelTextStyle}
              />
              <br />

              <FlatButton
                type="submit"
                label="Register"
                backgroundColor="#F3F3F3"
                style={muiStyle.submitButton}
                labelStyle={muiStyle.submitButtonText}
              />
            </form>

            <h6>
              If you want to register as a Teacher, please contact <br />
              <a href="mailto:codeestacks@gmail.com" target="_top">
                Support Team
              </a>
            </h6>

            <div className={style.backContainer}>
              <FlatButton
                type="submit"
                label="Back"
                style={muiStyle.backButton}
                onClick={this.handleBack}
                labelStyle={muiStyle.backButtonText}
              />
            </div>
          </Paper>
        </div>

        {/* Created User Dialog */}
        <Dialog
          title="Success"
          titleStyle={muiStyle.dialogTitleStyle}
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}
        >
          User created successfully, please login to continue!.
        </Dialog>
      </div>
    );
  }
}

export default Register;
