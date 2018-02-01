import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI imports
import Paper from 'material-ui/Paper'

// Import components
import SearchBar from './SearchBar'
import CourseList from './CourseList'

// Material UI Styles
const muiStyle = {
}

// Component Style
import style from './style.less'

class Courses extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<Paper zDepth={1} className={style.courses}>
        <SearchBar />
        <CourseList />
	  	</Paper>
	  )
	}
}

export default Courses
