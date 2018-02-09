import React from 'react'

// Material UI imports
import Paper from 'material-ui/Paper'

// Component's paths
import CreateUserForm from './CreateUserForm'
import UsersTable from './UsersTable'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  }
}

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
        <Paper zDepth={1} style={muiStyle.paper}>
          <CreateUserForm />
          <UsersTable />
        </Paper>
      </div>
    )
  }
}
