import React from 'react'

// Material UI imports
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

// Import components
import Navbar from '../Navbar'

// Import static icons
import {img} from '../../static'

// Material UI Styles
const muiStyle = {
  floatingLabelTextStyle: {
    fontWeight: '100',
    color: '#4a4a4a'
  },
  createButtonStyle: {
    margin: '20px 40px'
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
  uploadButtonLabelStyle: {
    color: '#4A4A4A'
  }
}

// Component Style
import style from './style.less'

class AddCourse extends React.Component {
  constructor(props) {
    super()
    this.state = {
      courseName: ""
    }
    this.handleCourseNameChange = this.handleCourseNameChange.bind(this)
  }

  handleCourseNameChange(event) {
    this.setState({
      courseName: event.target.value
    })
  }

  render() {
    return (
      <div className={style.addCourse}>
        <Navbar {...this.props}/>

        <div className={style.container}>
          <h3>Add Course</h3>

          <TextField
            autoCorrect="none"
            autoCapitalize="none"
            type="text"
            floatingLabelText="Course Name"
            floatingLabelFixed={true}
            value={this.state.courseName}
            onChange={this.handleCourseNameChange}
            floatingLabelStyle={muiStyle.floatingLabelTextStyle}
            className={style.textFieldStyle}/>

          <div className={style.pictureContainer}>
            <p>Course Picture</p>
            <img className={style.pictureStyle} src={img.logo}/>

            <FlatButton
              label="Choose an Image"
              labelPosition="before"
              style={muiStyle.uploadButtonStyle}
              labelStyle={muiStyle.uploadButtonLabelStyle}
              containerElement="label">
                <input type="file" style={muiStyle.uploadInputStyle}/>
            </FlatButton>
          </div>

          <p>Description</p>
          <textarea name="message" className={style.description}/>

          <FlatButton
            // type="submit"
            label="Add Chapter"
            labelStyle={muiStyle.addChapterButton}
            icon={<ContentAdd/>}
            // style={muiStyle.createButtonStyle}
          />
        </div>
      </div>
    )
  }
}

export default AddCourse
