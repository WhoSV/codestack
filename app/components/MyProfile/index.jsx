import React from 'react'

// Material UI imports
import LinearProgress from 'material-ui/LinearProgress'
import ActionArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import ActionEdit from 'material-ui/svg-icons/image/edit'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

// Import static icons
import {img} from '../../static'

const courses = [
  {
    title: "C#",
    status: 54
  }, {
    title: "Swift",
    status: 25
  }, {
    title: "Ruby",
    status: 74
  }, {
    title: "JavaScript",
    status: 12
  }
]

class MyProfile extends React.Component {
  constructor(props) {
    super()
    this.state = {}
    this.navigateToCourse = this.navigateToCourse.bind(this)
    this.navigateToEditCourse = this.navigateToEditCourse.bind(this)
  }

  navigateToCourse() {
    this.props.history.push(`/dashboard/activecourse`)
  }

  navigateToEditCourse() {
    this.props.history.push(`/manage`)
  }

  render() {
    return (
      <div className={style.myProfile}>
        <Navbar {...this.props}/>

        <div className={style.headerStyle}>
          <img className={style.imgStyle} src={img.defaultIcon}/>
          <h2>Jon Doe</h2>
          <h4>Admin</h4>
        </div>

        {/* Only student can see this container */}
        <div className={style.coursesContainer}>
          <h2>My Courses</h2>
          <div className={style.courses}>
            {
              courses.map((course, index) => {
                return (
                  <div key={index} className={style.selectedCourseContainer}>
                    <a onClick={this.navigateToCourse}>
                      <div className={style.selectedCourseItem}>
                        <h4 className={style.courseNameStyle}><img className={style.defaultIconStyle} src={img.defaultIcon}/>{course.title}</h4>

                        <LinearProgress
                          mode="determinate"
                          className={style.progressStyle}
                          value={course.status} />

                        <h4 className={style.courseStatusStyle}>
                          {course.status} %
                        </h4>

                        <ActionArrow className={style.arrowButton}/>
                      </div>
                    </a>
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
              courses.map((course, index) => {
                return (
                  <div key={index} className={style.selectedCourseContainer}>
                    <a onClick={this.navigateToEditCourse}>
                      <div className={style.selectedCourseItem}>
                        <h4 className={style.courseNameStyle}>
                          <img className={style.defaultIconStyle} src={img.defaultIcon}/>
                          {course.title}
                        </h4>
                        <ActionEdit className={style.editButton}/>
                      </div>
                    </a>
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
