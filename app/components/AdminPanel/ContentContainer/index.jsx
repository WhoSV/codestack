import React from 'react';

// Material UI imports
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionBlock from 'material-ui/svg-icons/content/block';

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
};

// Component Actions
import { getCourses, deleteCourse, updateCourseStatus } from './actions';

// Component Style
import style from './style';

export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogDelete: false,
      dialogBlock: false,
      dialogUnblock: false,
      courses: [],
      course: {}
    };
  }

  componentWillMount() {
    this.updateCourses();
  }

  updateCourses() {
    getCourses(data => {
      this.setState({
        courses: data
      });
    });
  }

  dialogClose() {
    this.setState({
      dialogDelete: false,
      dialogBlock: false,
      dialogUnblock: false
    });
  }

  handleDeleteContent(course) {
    this.setState({
      dialogDelete: true,
      course: course
    });
  }

  handleBlockContent(course) {
    this.setState({
      dialogBlock: true,
      course: course
    });
  }

  handleUnblockContent(course) {
    this.setState({
      dialogUnblock: true,
      course: course
    });
  }

  confirmDeleteContent() {
    deleteCourse(this.state.course.id, res => {
      this.setState({
        dialogDelete: false,
        course: {}
      });
      this.updateCourses();
    });
  }

  confirmBlockContent() {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    const id = this.state.course.id;
    let status = 'BLOCKED';

    let reqInputs = [id, status];

    if (reqInputs) {
      let formData = {
        id: id,
        status: status
      };

      updateCourseStatus(formData, () => {
        this.setState({
          dialogBlock: false,
          course: {}
        });
        this.updateCourses();
      });
    }
  }

  confirmUnblockContent() {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    const id = this.state.course.id;
    let status = 'ACTIVE';

    let reqInputs = [id, status];

    if (reqInputs) {
      let formData = {
        id: id,
        status: status
      };

      updateCourseStatus(formData, () => {
        this.setState({
          dialogUnblock: false,
          course: {}
        });
        this.updateCourses();
      });
    }
  }

  render() {
    const deleteActions = [
      <FlatButton
        label="Cancel"
        style={{ color: '#747374' }}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Delete"
        style={{ color: '#ff0000' }}
        primary={true}
        onTouchTap={this.confirmDeleteContent.bind(this)}
      />
    ];

    const blockActions = [
      <FlatButton
        label="Cancel"
        style={{ color: '#747374' }}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Block"
        style={{ color: '#ff0000' }}
        primary={true}
        onTouchTap={this.confirmBlockContent.bind(this)}
      />
    ];

    const unblockActions = [
      <FlatButton
        label="Cancel"
        style={{ color: '#747374' }}
        primary={true}
        onTouchTap={this.dialogClose.bind(this)}
      />,
      <FlatButton
        label="Unblock"
        style={{ color: '#ff0000' }}
        primary={true}
        onTouchTap={this.confirmUnblockContent.bind(this)}
      />
    ];

    return (
      <div className={style.contentContainerStyle}>
        <h3 className={style.title}>Courses Table</h3>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Teacher</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>Options</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.courses.map((course, index) => {
              return (
                <TableRow key={index}>
                  <TableRowColumn>{course.name}</TableRowColumn>
                  <TableRowColumn>{course.teacher}</TableRowColumn>
                  <TableRowColumn>
                    {(() => {
                      if (course.status === 'ACTIVE') {
                        return (
                          <span style={{ color: '#0080FF' }}>
                            {course.status}
                          </span>
                        );
                      }
                      if (course.status === 'BLOCKED') {
                        return (
                          <span style={{ color: '#F44336' }}>
                            {course.status}
                          </span>
                        );
                      }
                    })()}
                  </TableRowColumn>
                  <TableRowColumn>
                    {(() => {
                      if (course.status == 'ACTIVE') {
                        return (
                          <IconButton
                            onTouchTap={this.handleBlockContent.bind(
                              this,
                              course
                            )}
                            style={muiStyle.iconButton}
                            className={style.iconButtonStyle}
                            iconStyle={muiStyle.iconUnblockButton}
                            touch={true}
                            tooltip="Block"
                            tooltipPosition="bottom-left"
                          >
                            <ActionBlock />
                          </IconButton>
                        );
                      } else {
                        return (
                          <IconButton
                            onTouchTap={this.handleUnblockContent.bind(
                              this,
                              course
                            )}
                            style={muiStyle.iconButton}
                            className={style.iconButtonStyle}
                            iconStyle={muiStyle.iconBlockButton}
                            touch={true}
                            tooltip="Unblock"
                            tooltipPosition="bottom-left"
                          >
                            <ActionBlock />
                          </IconButton>
                        );
                      }
                    })()}
                    <IconButton
                      onTouchTap={this.handleDeleteContent.bind(this, course)}
                      style={muiStyle.iconButton}
                      className={style.iconButtonStyle}
                      iconStyle={muiStyle.iconDeleteButton}
                      touch={true}
                      tooltip="Delete"
                      tooltipPosition="bottom-center"
                    >
                      <ActionDelete />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
              );
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
          onRequestClose={this.dialogClose.bind(this)}
        >
          Do you realy want to delete
          <span className={style.highlight}>{this.state.course.name}</span>
          ?
        </Dialog>

        {/* Unblock Content Dialog */}
        <Dialog
          className={style.dialog}
          title="Unblock Course"
          actions={unblockActions}
          modal={false}
          open={this.state.dialogUnblock}
          onRequestClose={this.dialogClose.bind(this)}
        >
          Do you realy want to unblock
          <span className={style.highlight}>{this.state.course.name}</span>
          ?
        </Dialog>

        {/* Block Content Dialog */}
        <Dialog
          className={style.dialog}
          title="Block Course"
          actions={blockActions}
          modal={false}
          open={this.state.dialogBlock}
          onRequestClose={this.dialogClose.bind(this)}
        >
          Do you realy want to block
          <span className={style.highlight}>{this.state.course.name}</span>
          ?
        </Dialog>
      </div>
    );
  }
}
