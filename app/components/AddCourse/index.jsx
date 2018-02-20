import React from 'react'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

class AddCourse extends React.Component {
	constructor(props) {
		super()
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.addCourse}>
				<Navbar {...this.props}/>

        <p>add</p>
        <p>add</p>
        <p>add</p>
        <p>add</p>
        <p>add</p>
        <p>add</p>
	  	</div>
	  )
	}
}

export default AddCourse
