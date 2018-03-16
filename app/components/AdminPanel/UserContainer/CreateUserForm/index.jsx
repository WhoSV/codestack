import React from 'react'

// Material UI imports
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ContentAdd from 'material-ui/svg-icons/content/add'

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
    fontWeight: 'normal'
  },
  createButtonStyle: {
    margin: '20px 40px'
  },
  errorStyle: {
    textAlign: 'center'
  }
}

// Component Actions
import {createUser} from './actions'

// Component Style
import style from './style'

export default class CreateUserForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      full_name: "",
      mail: "",
      role: "",
      password: "",
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMailChange = this.handleMailChange.bind(this)
    this.handleRoleChange = this.handleRoleChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleCreateUser = this.handleCreateUser.bind(this)
  }

  handleNameChange(event) {
    this.setState({
      full_name: event.target.value
    })
  }

  handleMailChange(event) {
    this.setState({
      mail: event.target.value
    })
  }

  handleRoleChange(event, index, value) {
    this.setState({
      role: value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleCreateUser(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    this.setState({
      inputError: ""
    })

    const full_name = this.state.full_name;
    const mail = this.state.mail;
    const role = this.state.role;
    const password = this.state.password;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == "") {
          return false
        }
      }
      return true
    }

    let reqInputs = [full_name, mail, password, role];

    if (validateForm(reqInputs)) {
      let formData = {
        full_name: full_name,
        mail: mail,
        role: role,
        password: password
      }

      createUser(formData, () => {
        this.setState({
          full_name: "",
          mail: "",
          role: "",
          password: ""
        })
      })

    } else {
      this.setState({
        inputError: "All fields must be filled."
      })
    }
  }

  render() {
    return (
      <div className={style.createUserStyle}>
        <h3 className={style.title}>Create User</h3>
        <form
          onSubmit={this.handleCreateUser}
          className={style.formStyle}>

          <div className={style.container}>
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
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

            <TextField
              autoCorrect="none"
              autoCapitalize="none"
              hintText="mail@example.com"
              type="mail"
              floatingLabelText="Email"
              errorText={this.state.inputError}
              value={this.state.mail}
              className={style.textFieldStyle}
              onChange={this.handleMailChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>
          </div>

          <div className={style.container}>
            <TextField
              autoCorrect="none"
              autoCapitalize="none"
              hintText="********"
              type="password"
              floatingLabelText="Password"
              errorText={this.state.inputError}
              value={this.state.password}
              className={style.textFieldStyle}
              onChange={this.handlePasswordChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}/>

            <SelectField
              floatingLabelText="Role"
              value={this.state.role}
              className={style.selectFieldStyle}
              errorText={this.state.inputError}
              errorStyle={muiStyle.errorStyle}
              onChange={this.handleRoleChange}
              floatingLabelStyle={muiStyle.floatingLabelTextStyle}>
                <MenuItem value="STUDENT" primaryText="Student"/>
                <MenuItem value="TEACHER" primaryText="Teacher"/>
                <MenuItem value="ADMIN" primaryText="Admin"/>
            </SelectField>
          </div>

          <RaisedButton
            type="submit"
            label="Create"
            icon={<ContentAdd/>}
            labelColor="#fff"
            backgroundColor="#37BDD5"
            style={muiStyle.createButtonStyle}/>
        </form>
      </div>
    )
  }
}
