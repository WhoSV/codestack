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

// Component Style
import style from './style'

export default class CreateUserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      type: "",
      inputError: ""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleTypeChange(event, index, value) {
    this.setState({type: value})
  }

  handleCreateUser(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    let type = this.state.type;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == "") {
          return false
        }
      }
      return true
    }

    let reqInputs = [name, email, password, type];

    if (validateForm(reqInputs)) {
      let formData = {
        name: name,
        email: email,
        password: password,
        type: type
      }

      // createUser(formData, (res) => {
      //   this.setState({
      //     email: "",
      //     password: "",
      //     inputError: ""
      //   })
      //   this.props.userCreated(res);
      // })

    } else {
      this.setState({inputError: "All fields must be filled."})
    }
  }

  render() {
    return (<div className={style.createUserStyle}>
      <h3 className={style.title}>Create User</h3>
      <form id="createUser" onSubmit={this.handleCreateUser.bind(this)} className={style.formStyle}>

        <div className={style.container}>
          <TextField autoCorrect="none" autoCapitalize="none" hintText="Jon Doe" type="text" floatingLabelText="Name & Surname" errorText={this.state.inputError} value={this.state.name} onChange={this.handleNameChange} floatingLabelStyle={muiStyle.floatingLabelTextStyle} className={style.textFieldStyle}/>

          <TextField value={this.state.email} onChange={this.handleEmailChange.bind(this)} type="email" hintText="email@example.com" floatingLabelText="Email" errorText={this.state.inputError} floatingLabelStyle={muiStyle.floatingLabelTextStyle} className={style.textFieldStyle}/>
        </div>

        <div className={style.container}>
          <TextField value={this.state.password} onChange={this.handlePasswordChange.bind(this)} type="password" hintText="Set a password" floatingLabelText="Password" errorText={this.state.inputError} floatingLabelStyle={muiStyle.floatingLabelTextStyle} className={style.textFieldStyle}/>

          <SelectField floatingLabelText="Type" value={this.state.type} className={style.selectFieldStyle} errorText={this.state.inputError} errorStyle={muiStyle.errorStyle} onChange={this.handleTypeChange} floatingLabelStyle={muiStyle.floatingLabelTextStyle}>
            <MenuItem value={1} primaryText="Student"/>
            <MenuItem value={2} primaryText="Teacher"/>
            <MenuItem value={3} primaryText="Admin"/>
          </SelectField>
        </div>

        <RaisedButton type="submit" label="Create" icon={<ContentAdd/>} labelColor="#fff" backgroundColor="#37BDD5" style={muiStyle.createButtonStyle}/>
      </form>
    </div>)
  }
}
