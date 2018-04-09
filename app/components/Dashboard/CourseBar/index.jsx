import React from 'react'

// Material UI imports
import IconButton from 'material-ui/IconButton'
import ActionArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right'

// Component Style
import style from './style.less'

// Import static Resources
import {img} from '../../../static'

class CourseBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.navigateToCourse = this.navigateToCourse.bind(this)
  }

  navigateToCourse() {
    // go course pdf or link
  }

  render() {
    return (
      <div className={style.courseBar}>
        <h3 className={style.title}>Favorite Courses</h3>
        {
          this.props.courses.map((course, index) => {
            return (
              <div key={index} className={style.selectedCourseContainer}>
                <a onClick={this.navigateToCourse}>
                  <div className={style.selectedCourseItem}>
                    <div className={style.imgContainer}>
                      <img className={style.defaultIconStyle} src={img.defaultIcon}/>
                    </div>
                    <h4>{course.name}</h4>

                    <IconButton
                      tooltip="Open"
                      tooltipPosition="bottom-left"
                      touch={true}>
                      <ActionArrow className={style.arrowButton}/>
                    </IconButton>
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CourseBar
