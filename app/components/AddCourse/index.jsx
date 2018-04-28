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
import { getUser, createCourse } from './actions';

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

class AddCourse extends React.Component {
  constructor(props) {
    super();

    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();

    this.state = {
      id: '',
      teacherName: '',
      courseName: '',
      courseDescription: '',
      fileName: '',
      status: 'ACTIVE',
      file: '',
      dialogAlert: false,
      date: date
    };
    this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
    this.handleCourseDescrChange = this.handleCourseDescrChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillMount() {
    this.state.id = localStorage.id;
    this.activeUser();
  }

  activeUser() {
    getUser(this.state.id, data => {
      this.setState({
        teacherName: data.full_name
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

  handleUploadFile(event) {
    let selectedFile = event.target.files;
    let file = '';
    let fileName = '';
    let that = this;

    //Check File is not Empty
    if (selectedFile.length > 0) {
      // Select the very first file from list
      let fileToLoad = selectedFile[0];
      fileName = fileToLoad.name;

      // FileReader function for read the file.
      let fileReader = new FileReader();

      // Onload of file read the file content
      fileReader.onload = function(fileLoadedEvent) {
        file = fileLoadedEvent.target.result;
        that.setState({
          file: file
        });
      };

      // Convert data to base64
      fileReader.readAsDataURL(fileToLoad);
    }

    this.setState({
      fileName: fileName
    });
  }

  handleSubmit(event) {
    // Call preventDefault() on the event to prevent the browser's default
    // action of submitting the form.
    event.preventDefault();

    this.setState({
      inputError: ''
    });

    const name = this.state.courseName;
    const description = this.state.courseDescription;
    const teacher = this.state.teacherName;
    const teacherId = this.state.id;
    const status = this.state.status;
    const date = this.state.date;
    const file = this.state.file;
    const fileName = this.state.fileName;

    let validateForm = function(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == null || arr[i] == '') {
          return false;
        }
      }
      return true;
    };

    let reqInputs = [
      name,
      description,
      teacher,
      status,
      date,
      file,
      fileName,
      teacherId
    ];

    if (validateForm(reqInputs)) {
      let formData = {
        name: name,
        description: description,
        teacher: teacher,
        teacher_id: teacherId,
        status: status,
        created_at: date,
        file_body: file,
        file_name: fileName
      };

      createCourse(formData, () => {
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
    this.props.history.push('/dashboard');
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
          <h3>Add Course</h3>

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
            onChange={this.handleUploadFile}
          >
            <input type="file" style={muiStyle.uploadInputStyle} />
          </RaisedButton>

          <br />
          <br />
          <h5>
            File name:
            <span className={style.fileNameStyle}> {this.state.fileName}</span>
          </h5>

          <RaisedButton
            type="submit"
            label="Add course"
            onClick={this.handleSubmit}
            style={muiStyle.addButtonStyle}
            className={style.addButtonStyle}
            primary={true}
          />
        </div>

        {/* Add Course Dialog */}
        <Dialog
          title="Success"
          titleStyle={muiStyle.dialogTitleStyle}
          actions={alertActions}
          modal={false}
          open={this.state.dialogAlert}
        >
          Your course has been successfully added!.
        </Dialog>
      </div>
    );
  }
}

export default AddCourse;
