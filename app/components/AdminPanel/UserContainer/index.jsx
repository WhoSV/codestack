import React from 'react'

// Component's paths
import CreateUserForm from './CreateUserForm'
import UsersTable from './UsersTable'

// Component Style
import style from './style'

// Component Actions
import {getUsers} from './actions'

export default class UserContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    this.updateUsers()
  }

  changeOnUserList() {
    this.updateUsers()
  }

  updateUsers() {
    getUsers((data) => {
      this.setState({users: data});
    })
  }

  render() {
    return (<div className={style.userContainerStyle}>
      <CreateUserForm/>
      <UsersTable users={this.state.users}/>
    </div>)
  }
}
