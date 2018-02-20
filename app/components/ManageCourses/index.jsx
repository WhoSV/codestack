import React from 'react'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

class ManageCourses extends React.Component {
	constructor(props) {
		super()
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.manageCourses}>
				<Navbar {...this.props}/>

        <p>manage</p>
        <p>manage</p>
				<p>manage</p>
				<p>manage</p>
				<p>manage</p>
				<p>manage</p>
	  	</div>
	  )
	}
}

export default ManageCourses
