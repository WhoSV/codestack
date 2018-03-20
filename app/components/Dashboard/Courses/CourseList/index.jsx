import React from 'react'

// Material UI imports
import ThumbUpIcon from 'material-ui/svg-icons/action/thumb-up'

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

// Component Style
import style from './style.less'

// Import static Resources
import {img} from '../../../../static'

class CourseList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.navigateToCourse = this.navigateToCourse.bind(this)
    this.upVote = this.upVote.bind(this)
  }

  navigateToCourse() {
    this.props.history.push(`${this.props.match.url}/activecourse`)
  }

  upVote() {
    console.log("up vote");
  }

  render() {
    return (
      <div className={style.courseList}>
        {
          courses.map((course, index) => {
            return (
              <div key={index} className={style.listItem}>
                <div className={style.listItemTitle}>
                  <a onClick={this.navigateToCourse}>
                    <h3><img className={style.defaultIconStyle} src={img.defaultIcon}/>{course.title}</h3>
                  </a>
                  <a className={style.upVoteStyle} onClick={this.upVote}>
                    <h5><ThumbUpIcon className={style.upvoteIconStyle}/>{course.rating} Likes</h5>
                  </a>
                </div>
                <h5 className={style.listItemTeacher}>by: {course.teacher}</h5>
                <h5 className={style.listItemDate}>{course.date}</h5>
                <p className={style.listItemDescription}>{course.description}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CourseList
