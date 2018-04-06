import React from 'react'

// Material UI imports
import IconButton from 'material-ui/IconButton'
import ActionArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import ActionEdit from 'material-ui/svg-icons/image/edit'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

// Import static icons
import {img} from '../../static'

// Component Actions
import {getUser, getCourses} from './actions'

class MyProfile extends React.Component {
  constructor(props) {
    super()
    this.state = {
      id: "",
      name: "",
      role: "",
      courses: []
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

  navigateToCourse() {
    // open pdf link
  }

  navigateToEditCourse() {
    // Go to edit course
  }

  render() {
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
                        tooltip="Go to Course"
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
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default MyProfile
