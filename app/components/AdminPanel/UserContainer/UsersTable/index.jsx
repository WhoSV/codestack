import React from 'react'

// Material UI imports
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import ActionDelete from 'material-ui/svg-icons/action/delete'

// Material UI Styles
const muiStyle = {
  floatingLabelStyle: {
    fontWeight: 'normal'
  },
  iconDeleteButton: {
    color: '#424242'
  },
  iconButton: {
    zIndex: '9999 !important'
  }
}

// Component Actions
import {deleteUser} from './actions'

// Component Style
import style from './style'

export default class UsersTable extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dialogAlert: false,
      deleteUser: {}
    }
  }

  dialogAlert() {
    this.setState({
      dialogAlert: true
    })
  }

  dialogClose() {
    this.setState({
      dialogAlert: false
    })
  }

  handleDeleteUser(user) {
    this.setState({
      dialogAlert: true,
      deleteUser: user
    })
  }

  confirmDeleteUser() {
    deleteUser(this.state.deleteUser.id, (res) => {

      this.setState({
        dialogAlert: false,
        deleteUser: {}
      })
      // this.props.changeOnUserList()
    })
  }

  render() {
    const alertActions = [
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
        onTouchTap={this.confirmDeleteUser.bind(this)}
      />
    ]

    return (
      <div className={style.usersTabble}>
        <h3 className={style.title}>Users Table</h3>
        <Table selectable={false}>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Type</TableHeaderColumn>
                <TableHeaderColumn>Options</TableHeaderColumn>
              </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>

            {/* Maps through the users state to render user rows */}
            {
              this.props.users.map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableRowColumn>{user.full_name}</TableRowColumn>
                    <TableRowColumn>{user.mail}</TableRowColumn>
                    <TableRowColumn>{user.role}</TableRowColumn>
                    <TableRowColumn>
                      <IconButton
                        onTouchTap={this.handleDeleteUser.bind(this, user)}
                        style={muiStyle.iconButton}
                        className={style.iconButtonStyle}
                        iconStyle={muiStyle.iconDeleteButton}
                        touch={true}>
                          <ActionDelete/>
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>

        {/* Delete User Dialog */}
        <Dialog
          className={style.dialog}
          title="Delete User"
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}
          onRequestClose={this.dialogClose.bind(this)}>
            Do you realy want to delete
            <span className={style.highlight}>
              {this.state.deleteUser.full_name}
            </span>
            ?
        </Dialog>
      </div>
    )
  }
}
