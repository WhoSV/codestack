import React from 'react'

// Material UI imports
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

class ManageCourses extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className={style.manageCourses}>
        <Navbar {...this.props}/>

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

export default ManageCourses
