import React from 'react'

// Component's paths
import CreateUserForm from './CreateUserForm'
import UsersTable from './UsersTable'

// Component Style
import style from './style'

export default class UserContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className={style.userContainerStyle}>
        <CreateUserForm />
        <UsersTable />
      </div>
    )
  }
}
