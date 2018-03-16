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
import ActionBlock from 'material-ui/svg-icons/content/block'

// Material UI Styles
const muiStyle = {
  paper: {
    padding: '0px 50px 50px 50px'
  },
  floatingLabelStyle: {
    fontWeight: 'normal'
  },
  iconDeleteButton: {
    color: '#424242'
  },
  iconBlockButton: {
    color: '#ff0000'
  },
  iconUnblockButton: {
    color: '#ccc'
  },
  iconButton: {
    zIndex: '9999 !important'
  }
}

const content = [
  {
    name: "JavaScript",
    teacher: "Jon Doe",
    status: "Active"
  }, {
    name: "JavaScript",
    teacher: "Jon Doe",
    status: "Passive"
  }, {
    name: "JavaScript",
    teacher: "Jon Doe",
    status: "Active"
  }, {
    name: "JavaScript",
    teacher: "Jon Doe",
    status: "Passive"
  }, {
    name: "JavaScript",
    teacher: "Jon Doe",
    status: "Active"
  }
]

// Component Style
import style from './style'

export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dialogDelete: false,
      dialogBlock: false,
      dialogUnblock: false,
      deleteContent: {}
    }
  }

  dialogDelete() {
    this.setState({
      dialogDelete: true
    })
  }

  dialogBlock() {
    this.setState({
      dialogBlock: true
    })
  }

  dialogUnblock() {
    this.setState({
      dialogUnblock: true
    })
  }

  dialogClose() {
    this.setState({
      dialogDelete: false,
      dialogBlock: false,
      dialogUnblock: false
    })
  }

  handleDeleteContent(content) {
    this.setState({
      dialogDelete: true,
      deleteContent: content
    })
  }

  handleBlockContent(content) {
    this.setState({
      dialogBlock: true,
      deleteContent: content
    })
  }

  handleUnblockContent(content) {
    this.setState({
      dialogUnblock: true,
      deleteContent: content
    })
  }

  confirmDeleteContent() {
    console.log("confirm delete");
  }

  confirmBlockContent() {
    console.log("confirm block");
  }

  confirmUnblockContent() {
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
      />
    ]

    const blockActions = [
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
        onTouchTap={this.confirmBlockContent.bind(this)}
      />
    ]

    const unblockActions = [
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
        onTouchTap={this.confirmUnblockContent.bind(this)}
      />
    ]

    return (
      <div className={style.contentContainerStyle}>
        <h3 className={style.title}>Content Table</h3>
        <Table selectable={false}>
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
          <TableBody displayRowCheckbox={false}>
            {
              content.map((contentItem, index) => {
                return (
                  <TableRow key={index}>
                    <TableRowColumn>{contentItem.name}</TableRowColumn>
                    <TableRowColumn>{contentItem.teacher}</TableRowColumn>
                    <TableRowColumn>{contentItem.status}</TableRowColumn>
                    <TableRowColumn>
                      {
                        (() => {
                          if (contentItem.status == "Active") {
                            return (
                              <IconButton
                                onTouchTap={this.handleBlockContent.bind(this, contentItem)}
                                style={muiStyle.iconButton}
                                className={style.iconButtonStyle}
                                iconStyle={muiStyle.iconUnblockButton}
                                touch={true}>
                                  <ActionBlock/>
                              </IconButton>
                            )
                          } else {
                            return (
                              <IconButton
                                onTouchTap={this.handleUnblockContent.bind(this, contentItem)}
                                style={muiStyle.iconButton}
                                className={style.iconButtonStyle}
                                iconStyle={muiStyle.iconBlockButton}
                                touch={true}>
                                <ActionBlock/>
                              </IconButton>
                            )
                          }
                        })()
                      }
                      <IconButton
                        onTouchTap={this.handleDeleteContent.bind(this, contentItem)}
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

        {/* Unblock Content Dialog */}
        <Dialog
          className={style.dialog}
          title="Unblock Course"
          actions={unblockActions}
          modal={false}
          open={this.state.dialogUnblock}
          onRequestClose={this.dialogClose.bind(this)}>
            Do you realy want to unblock
            <span className={style.highlight}>
              This Curse
            </span>
            ?
        </Dialog>

        {/* Block Content Dialog */}
        <Dialog
          className={style.dialog}
          title="Block Course"
          actions={blockActions}
          modal={false}
          open={this.state.dialogBlock}
          onRequestClose={this.dialogClose.bind(this)}>
            Do you realy want to block
            <span className={style.highlight}>
              This Curse
            </span>
            ?
        </Dialog>
      </div>
    )
  }
}
