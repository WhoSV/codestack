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
import Paper from 'material-ui/Paper'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionLock from 'material-ui/svg-icons/action/lock'
import ActionUnlock from 'material-ui/svg-icons/action/lock-open'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px',
  },
  floatingLabelStyle: {
    fontWeight: 'normal',
  },
  iconDeleteButton: {
    color: '#FF1744',
  },
  iconLockButton: {
    color: '#3F51B5',
  },
  iconUnlockButton: {
    color: '#00C853',
  },
  iconButton: {
    zIndex: '9999 !important',
  }
}

const content = [
  {
		name: "JavaScript",
		teacher: "Jon Doe",
    status: "Active",
  },
  {
		name: "JavaScript",
		teacher: "Jon Doe",
    status: "Passive",
  },
  {
		name: "JavaScript",
		teacher: "Jon Doe",
    status: "Active",
  },
  {
		name: "JavaScript",
		teacher: "Jon Doe",
    status: "Passive",
  },
  {
		name: "JavaScript",
		teacher: "Jon Doe",
    status: "Active",
  },
]

// Component Style
import style from './style'

export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogDelete: false,
      dialogLock: false,
      dialogUnlock: false,
      deleteContent: {}
    }
  }

  dialogDelete() {
    this.setState({dialogDelete: true})
  }

  dialogLock() {
    this.setState({dialogLock: true})
  }

  dialogUnlock() {
    this.setState({dialogUnlock: true})
  }

  dialogClose() {
    this.setState({
      dialogDelete: false,
      dialogLock: false,
      dialogUnlock: false,
    })
  }

  handleDeleteContent(content) {
    this.setState({
      dialogDelete: true,
      deleteContent: content
    })
  }

  handleLockContent(content) {
    this.setState({
      dialogLock: true,
      deleteContent: content
    })
  }

  handleUnlockContent(content) {
    this.setState({
      dialogUnlock: true,
      deleteContent: content
    })
  }

  confirmDeleteContent(){
    console.log("confirm delete");
  }

  confirmLockContent(){
    console.log("confirm block");
  }

  confirmUnlockContent(){
    console.log("confirm Unblock");
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
        onTouchTap={this.confirmDeleteContent.bind(this)}
      />,
    ]

    const lockActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Block"
        style={{color: "#ff0000"}}
        primary={true}
        onTouchTap={this.confirmLockContent.bind(this)}
      />,
    ]

    const unlockActions = [
      <FlatButton
        label="Cancel"
        style={{color: "#747374"}}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Unblock"
        style={{color: "#ff0000"}}
        primary={true}
        onTouchTap={this.confirmUnlockContent.bind(this)}
      />,
    ]

    return (
      <div className={style.contentContainerStyle}>
        <Paper zDepth={1} style={muiStyle.paper}>
          <h3 className={style.title}>Content Table</h3>
          <Table
            selectable={false}>
             <TableHeader
               displaySelectAll={false}
               adjustForCheckbox={false}>
               <TableRow>
                 <TableHeaderColumn>Name</TableHeaderColumn>
                 <TableHeaderColumn>Teacher</TableHeaderColumn>
                 <TableHeaderColumn>Status</TableHeaderColumn>
                 <TableHeaderColumn>Options</TableHeaderColumn>
               </TableRow>
             </TableHeader>
             <TableBody
               displayRowCheckbox={false}>
               {content.map((contentItem, index) => {
                 return (
                   <TableRow key={index}>
                     <TableRowColumn>{contentItem.name}</TableRowColumn>
                     <TableRowColumn>{contentItem.teacher}</TableRowColumn>
                     <TableRowColumn>{contentItem.status}</TableRowColumn>
                     <TableRowColumn>
                       {(() => {
                         if (contentItem.status == "Active") {
                           return (
                           <IconButton
                             onTouchTap={this.handleLockContent.bind(this, contentItem)}
                             style={muiStyle.iconButton}
                             iconStyle={muiStyle.iconUnlockButton}
                             touch={true}>
                               <ActionUnlock/>
                           </IconButton>
                           )
                         } else {
                           return (
                             <IconButton
                               onTouchTap={this.handleUnlockContent.bind(this, contentItem)}
                               style={muiStyle.iconButton}
                               iconStyle={muiStyle.iconLockButton}
                               touch={true}>
                                <ActionLock/>
                             </IconButton>
                           )
                         }
                       })()}
                       <IconButton
                         onTouchTap={this.handleDeleteContent.bind(this, contentItem)}
                         style={muiStyle.iconButton}
                         iconStyle={muiStyle.iconDeleteButton}
                         touch={true}>
                           <ActionDelete/>
                       </IconButton>
                     </TableRowColumn>
                   </TableRow>
                 )
               })}
             </TableBody>
          </Table>

          {/* Delete Content Dialog */}
          <Dialog
            className={style.dialog}
            title="Delete Course"
            actions={deleteActions}
            modal={false}
            open={this.state.dialogDelete}
            onRequestClose={this.dialogClose.bind(this)}>
            Do you realy want to delete
            <span className={style.highlight}>
               This Curse
            </span>
            ?
          </Dialog>

          {/* Unlock Content Dialog */}
          <Dialog
            className={style.dialog}
            title="Unblock Course"
            actions={unlockActions}
            modal={false}
            open={this.state.dialogUnlock}
            onRequestClose={this.dialogClose.bind(this)}>
            Do you realy want to unblock
            <span className={style.highlight}>
               This Curse
            </span>
            ?
          </Dialog>

          {/* Lock Content Dialog */}
          <Dialog
            className={style.dialog}
            title="Block Course"
            actions={lockActions}
            modal={false}
            open={this.state.dialogLock}
            onRequestClose={this.dialogClose.bind(this)}>
            Do you realy want to block
            <span className={style.highlight}>
               This Curse
            </span>
            ?
          </Dialog>

        </Paper>
      </div>
    )
  }
}
