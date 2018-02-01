import React from 'react'
import { Redirect } from 'react-router-dom'

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
	  	<div className={style.courses}>
        <SearchBar />
        <CourseList />
	  	</div>
	  )
	}
}

export default Courses
