import React from 'react'

// Material UI imports
import IconButton from 'material-ui/IconButton'
import FavoriteIcon from 'material-ui/svg-icons/action/favorite'

// Material UI Styles
const muiStyle = {
  underlineStyle: {
    border: '0.5px solid #30CFD0'
  },
  submitButton: {
    minWidth: 50,
    width: 50
  },
  submitButtonLabelStyle: {
    padding: 0
  }
}

// Component Style
import style from './style.less'

// Import static Resources
import {img} from '../../../static'

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.navigateToCourse = this.navigateToCourse.bind(this)
    this.addFavorite = this.addFavorite.bind(this)
  }

  navigateToCourse() {
    // open pdf link
  }

  addFavorite() {
    // add course to favorite
  }

  render() {
    return (
      <div className={style.courses}>
        <div className={style.titleBar}>
          <h3>Available Courses</h3>
        </div>

        <div className={style.courseList}>
          {
            this.props.courses.map((course, index) => {
              return (
                <div key={index} className={style.listItem}>
                  <div className={style.listItemTitle}>
                    <a className={style.courseTitle} onClick={this.navigateToCourse}>
                      <h3><img className={style.defaultIconStyle} src={img.defaultIcon}/>{course.name}</h3>
                    </a>

                    <div className={style.votesContainer}>
                      <IconButton
                        tooltip="Add to Favorite"
                        tooltipPosition="bottom-left"
                        touch={true}
                        className={style.favoriteStyle}
                        onClick={this.addFavorite}>
                        <FavoriteIcon className={style.favoriteIconStyle}/>
                      </IconButton>
                    </div>

                  </div>
                  <h5 className={style.listItemTeacher}>By: {course.teacher}</h5>
                  <h5 className={style.listItemDate}>Date: {course.created_at}</h5>
                  <p className={style.listItemDescription}>{course.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Courses
