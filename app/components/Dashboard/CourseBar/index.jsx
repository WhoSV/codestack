import React from 'react'

const courses = [
	{
		title: "C#",
		status: "54",
	},
	{
		title: "Swift",
		status: "25",
	},
	{
		title: "Ruby",
		status: "74",
	},
	{
		title: "JavaScript",
		status: "12",
	},
]

// Component Style
import style from './style.less'

// Import static Resources
import { img } from '../../../static'

class CourseBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
		this.navigateToCourse = this.navigateToCourse.bind(this)
  }

	navigateToCourse(){
		this.props.history.push(`${this.props.match.url}/selectedcourse`)
	}

  render (){
		return (
			<div className={style.courseBar}>
	      <h3 className={style.title}>Selected Courses</h3>
				{courses.map((course, index) => {
					return (
						<div key={index} className={style.selectedCourseContainer}>
							<a onClick={this.navigateToCourse}>
								<div className={style.selectedCourseItem}>
									<h4><img className={style.defaultIconStyle} src={img.defaultIcon}/>{course.title}</h4>
									<h4 className={style.courseStatusStyle}>{course.status}%</h4>
								</div>
							</a>
						</div>
					)
				})}
			</div>
	  )
	}
}

export default CourseBar
