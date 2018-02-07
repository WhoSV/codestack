import React from 'react'
import { Redirect } from 'react-router-dom'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

class AdminPanel extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.adminPanel}>
				<Navbar />
	  	</div>
	  )
	}
}

export default AdminPanel
