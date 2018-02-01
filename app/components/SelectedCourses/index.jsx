import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI Styles
const muiStyle = {
}

// Component Style
import style from './style.less'

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
			</div>
	  )
	}
}

export default SelectedCourses
