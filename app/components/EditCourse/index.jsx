import React from 'react';

// Material UI imports
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// Import components
import Navbar from '../Navbar';

// Import static icons
import { img } from '../../static';

// Component Actions
import { getCourse, updateCourse } from './actions';

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
    fontWeight: '100',
    color: '#4a4a4a'
  },
  uploadInputStyle: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  },
  addButtonStyle: {
    width: '250px'
  },
  dialogTitleStyle: {
    color: '#4A90E2'
  }
};

// Component Style
import style from './style.less';

class EditCourse extends React.Component {
  constructor(props) {
    super();

    this.state = {
      id: '',
      courseid: null,
      courseName: '',
      courseDescription: '',
      fileName: '',
      fileData: null,
      dialogAlert: false
    };
    this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
    this.handleCourseDescrChange = this.handleCourseDescrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount() {
    this.state.id = localStorage.courseId;
    this.activeCourse();
  }

  activeCourse() {
    getCourse(this.state.id, data => {
      this.setState({
        courseid: data.id,
        courseName: data.name,
        courseDescription: data.description,
        fileLink: data.link
      });
    });
  }

  handleCourseNameChange(event) {
    this.setState({
      courseName: event.target.value
    });
  }

  handleCourseDescrChange(event) {
    this.setState({
      courseDescription: event.target.value
    });
  }

  uploadFile(event) {
    let file = event.target.files[0];

    // log file
    console.log(file);

    this.setState({
      fileData: file,
      fileName: file.name
    });
  }

  handleSubmit(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    this.setState({
      inputError: ''
    });

    const that = this;
    const name = this.state.courseName;
    const description = this.state.courseDescription;
    const link = this.state.fileLink;
    const id = this.state.courseid;
    const fileData = this.state.fileData;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == '') {
          return false;
        }
      }
      return true;
    };

    let reqInputs = [id, name, description];
    //fileData
    if (validateForm(reqInputs)) {
      let formData = {
        id: id,
        name: name,
        description: description
        // file: fileData
      };

      updateCourse(formData, () => {
        this.setState({
          dialogAlert: true
        });
      });
    } else {
      this.setState({
        inputError: 'All fields must be filled.'
      });
    }
  }

  handleBack() {
    this.props.history.push('/profile');
  }

  render() {
    const alertActions = [
      <FlatButton
        label="Continue"
        style={{ color: '#4A90E2' }}
        primary={true}
        onTouchTap={this.handleBack}
      />
    ];

    return (
      <div className={style.addCourse}>
        <Navbar {...this.props} />

        <div className={style.container}>
          <h3>Edit Course</h3>

          <TextField
            autoCorrect="none"
            autoCapitalize="none"
            type="text"
            floatingLabelText="Course Name"
            floatingLabelFixed={true}
            value={this.state.courseName}
            errorText={this.state.inputError}
            onChange={this.handleCourseNameChange}
            floatingLabelStyle={muiStyle.floatingLabelTextStyle}
            className={style.textFieldStyle}
          />

          <TextField
            autoCorrect="none"
            autoCapitalize="none"
            type="text"
            floatingLabelText="Description"
            floatingLabelFixed={true}
            value={this.state.courseDescription}
            errorText={this.state.inputError}
            onChange={this.handleCourseDescrChange}
            floatingLabelStyle={muiStyle.floatingLabelTextStyle}
            className={style.textFieldStyle}
            multiLine={true}
            rows={5}
            rowsMax={10}
          />

          <br />
          <h4>Attention!</h4>
          <h5>
            <span>-</span> All course should be in one <span>PDF</span> file!
          </h5>
          <h5>
            <span>-</span> Please upload a <span>PDF</span> file!
          </h5>
          <br />

          <RaisedButton
            label="Upload file"
            style={muiStyle.uploadButtonStyle}
            icon={<ContentAdd />}
            containerElement="label"
            onChange={this.uploadFile}
          >
            <input type="file" style={muiStyle.uploadInputStyle} />
          </RaisedButton>

          <br />
          <br />
          <h5>
            File name:
            <span className={style.fileNameStyle}>{this.state.fileName}</span>
          </h5>

          <RaisedButton
            type="submit"
            label="Update course"
            onClick={this.handleSubmit}
            style={muiStyle.addButtonStyle}
            className={style.addButtonStyle}
            primary={true}
          />
        </div>

        {/* Update Course Dialog */}
        <Dialog
          title="Success"
          titleStyle={muiStyle.dialogTitleStyle}
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}
        >
          Your course has been successfully Updated!.
        </Dialog>
      </div>
    );
  }
}

export default EditCourse;
