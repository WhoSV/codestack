import React from 'react'

// Import components
import SearchBar from './SearchBar'
import CourseList from './CourseList'

// Component Style
import style from './style.less'

class Courses extends React.Component {
	constructor(props) {
		super(props);
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
