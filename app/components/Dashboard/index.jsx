import React from 'react'
import { Redirect } from 'react-router-dom'

// Import components
import Navbar from '../Navbar'
import Courses from '../Courses'
import CourseBar from '../CourseBar'

// Component Style
import style from './style.less'

class Dashboard extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.dashboard}>
	      <Navbar />

				<div className={style.container}>
					<div className={style.coursesContainer}>
						<Courses />
					</div>

					<div className={style.selectedCoursesContainer}>
						<CourseBar />
					</div>
				</div>
	  	</div>
	  )
	}
}

export default Dashboard
