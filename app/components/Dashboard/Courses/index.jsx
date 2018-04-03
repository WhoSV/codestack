import React from 'react'
import {Route, Link} from 'react-router-dom'

// Material UI imports
import SearchIcon from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import ThumbUpIcon from 'material-ui/svg-icons/action/thumb-up'
import ThumbDownIcon from 'material-ui/svg-icons/action/thumb-down'

const courses = [
  {
    title: "C#",
    rating: "15",
    teacher: "Cristian Cimpoesh",
    date: "12/21/18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }, {
    title: "Swift",
    rating: "62",
    teacher: "Cristian Cimpoesh",
    date: "11/30/15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }, {
    title: "Ruby",
    rating: "55",
    teacher: "Cristian Cimpoesh",
    date: "1/23/18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }, {
    title: "JavaScript",
    rating: "85",
    teacher: "Cristian Cimpoesh",
    date: "11/11/18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }, {
    title: "C#",
    rating: "15",
    teacher: "Cristian Cimpoesh",
    date: "12/21/18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }, {
    title: "Swift",
    rating: "62",
    teacher: "Cristian Cimpoesh",
    date: "11/30/15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }, {
    title: "Ruby",
    rating: "55",
    teacher: "Cristian Cimpoesh",
    date: "1/23/18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }, {
    title: "JavaScript",
    rating: "85",
    teacher: "Cristian Cimpoesh",
    date: "11/11/18",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non augue quis dolor congue lacinia in pretium nunc. Pellentesque commodo vehicula leo, nec pretium libero consequat varius. Aliquam varius tellus quis magna dignissim, non molestie mauris rutrum. In viverra nunc odio, id gravida erat faucibus id."
  }
]

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
    this.upVote = this.upVote.bind(this)
    this.downVote = this.downVote.bind(this)
  }

  navigateToCourse() {
    this.props.history.push(`${this.props.match.url}/activecourse`)
  }

  upVote() {
    console.log("up vote");
  }

  downVote() {
    console.log("down vote");
  }

  render() {
    return (
      <div className={style.courses}>
        <div className={style.titleBar}>
          <h3>Available Courses</h3>
        </div>

        <div className={style.courseList}>
          {
            courses.map((course, index) => {
              return (
                <div key={index} className={style.listItem}>
                  <div className={style.listItemTitle}>
                    <a className={style.courseTitle} onClick={this.navigateToCourse}>
                      <h3><img className={style.defaultIconStyle} src={img.defaultIcon}/>{course.title}</h3>
                    </a>

                    <div className={style.votesContainer}>
                      <a className={style.voteStyle} onClick={this.upVote}><ThumbUpIcon className={style.voteIconStyle}/></a>
                      <a className={style.voteStyle} onClick={this.downVote}><ThumbDownIcon className={style.voteIconStyle}/></a>
                      <h5>{course.rating} Likes</h5>
                    </div>

                  </div>
                  <h5 className={style.listItemTeacher}>by: {course.teacher}</h5>
                  <h5 className={style.listItemDate}>{course.date}</h5>
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
