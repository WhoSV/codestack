import React from 'react'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

class SelectedCourses extends React.Component {
	constructor(props) {
		super()
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.selectedCourses}>
				<Navbar {...this.props}/>

        <p>selected</p>
        <p>selected</p>
				<p>selected</p>
				<p>selected</p>
				<p>selected</p>
				<p>selected</p>
	  	</div>
	  )
	}
}

export default SelectedCourses
