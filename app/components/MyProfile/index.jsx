import React from 'react'

// Material UI imports
import IconButton from 'material-ui/IconButton'
import ActionArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import ActionEdit from 'material-ui/svg-icons/image/edit'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

// Import static icons
import {img} from '../../static'

// Component Actions
import {getUser, getCourses, deleteCourse} from './actions'

class MyProfile extends React.Component {
  constructor(props) {
    super()
    this.state = {
      id: "",
      name: "",
      role: "",
      courses: [],
      course: {},
      dialogDelete: false,
    }
    this.navigateToCourse = this.navigateToCourse.bind(this)
    this.navigateToEditCourse = this.navigateToEditCourse.bind(this)
  }

  componentWillMount() {
    this.state.id = localStorage.id
    this.activeUser()
    this.updateCourses()
  }

  updateCourses() {
    getCourses((data) => {
      this.setState({
        courses: data
      });
    })
  }

  activeUser() {
    getUser(this.state.id, (data) => {
      this.setState({
        id: data.id,
        name: data.full_name,
        role: data.role
      });
    })
  }

  dialogClose() {
    this.setState({
      dialogDelete: false,
    })
  }

  confirmDeleteContent() {
    deleteCourse(this.state.course.id, (res) => {

      this.setState({
        dialogDelete: false,
        course: {}
      })
      this.updateCourses()
    })
  }

  deleteCourse(course) {
    this.setState({
      dialogDelete: true,
      course: course
    })
  }

  navigateToCourse() {
    // open pdf link
    console.log("open link");
  }

  navigateToEditCourse() {
    // Go to edit course
    console.log("edit");
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

    return (
      <div className={style.myProfile}>
        <Navbar {...this.props}/>

        <div className={style.headerStyle}>
          <img className={style.imgStyle} src={img.defaultUser}/>
          <h2>{this.state.name}</h2>
          <h4>{this.state.role}</h4>
        </div>

        {/* Only student can see this container */}
        <div className={style.coursesContainer}>
          <h2>Favorite Courses</h2>
          <div className={style.courses}>
            {
              this.state.courses.map((course, index) => {
                return (
                  <div key={index} className={style.selectedCourseContainer}>
                    <div className={style.selectedCourseItem}>
                      <h4 className={style.courseNameStyle}>
                        <img className={style.defaultIconStyle} src={img.defaultIcon}/>
                        {course.name}
                      </h4>

                      <IconButton
                        onClick={this.navigateToCourse}
                        tooltip="Open"
                        tooltipPosition="bottom-left"
                        touch={true}>
                        <ActionArrow className={style.arrowButton}/>
                      </IconButton>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


        {/* only teacher can see this container */}
        <div className={style.coursesContainer}>
          <div>
            <h2>Added Courses</h2>
          </div>
          <div className={style.courses}>
            {
              this.state.courses.map((course, index) => {
                return (
                  <div key={index} className={style.selectedCourseContainer}>
                    <div className={style.selectedCourseItem}>
                      <h4 className={style.courseNameStyle}>
                        <img className={style.defaultIconStyle} src={img.defaultIcon}/>
                        {course.name}
                      </h4>
                      <IconButton
                        onClick={this.navigateToEditCourse}
                        tooltip="Edit"
                        tooltipPosition="bottom-left"
                        touch={true}>
                          <ActionEdit className={style.editButton}/>
                      </IconButton>

                      <IconButton
                        onClick={this.deleteCourse.bind(this, course)}
                        tooltip="Delete"
                        tooltipPosition="bottom-left"
                        touch={true}>
                        <ActionDelete className={style.deleteButton}/>
                      </IconButton>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

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
              {this.state.course.name}
            </span>
            ?
        </Dialog>
      </div>
    )
  }
}

export default MyProfile
