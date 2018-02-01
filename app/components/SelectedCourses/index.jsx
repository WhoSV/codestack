import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI imports
import Paper from 'material-ui/Paper'

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
			<Paper zDepth={1} className={style.selectedCourses}>
	      <h3 className={style.title}>Selected Courses</h3>
			</Paper>
	  )
	}
}

export default SelectedCourses
