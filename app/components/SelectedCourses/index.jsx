import React from 'react'
import { Redirect } from 'react-router-dom'
import ProgressIcon from 'material-ui/svg-icons/editor/show-chart'

// Material UI imports
import Paper from 'material-ui/Paper'

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
import { img } from '../../static'

class SelectedCourses extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
			<div className={style.selectedCourses}>
	      <h3 className={style.title}>Selected Courses</h3>
				{courses.map((course, index) => {
					return (
						<Paper key={index} className={style.selectedCourseContainer}>
							<div className={style.selectedCourseItem}>
								<h4><img className={style.defaultIconStyle} src={img.defaultIcon}/>{course.title}</h4>
								<h5><ProgressIcon className={style.progressIconStyle} />{course.status}%</h5>
							</div>
						</Paper>
					)
				})}
			</div>
	  )
	}
}

export default SelectedCourses
