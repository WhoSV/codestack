import React from 'react'

// Component Style
import style from './style.less'

class SelectedCourse extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
			<div className={style.selectedCourse}>
	      <h3 className={style.title}>Selected Courses</h3>
				<h3 className={style.title}>Selected Courses</h3>
				<h3 className={style.title}>Selected Courses</h3>
				<h3 className={style.title}>Selected Courses</h3>
			</div>
	  )
	}
}

export default SelectedCourse
