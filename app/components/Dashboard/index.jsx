import React from 'react'
import { Redirect } from 'react-router-dom'

// Import components
import Navbar from '../Navbar'

// Material UI Styles
const muiStyle = {
}

// Component Style
import style from './style.less'

class Dashboard extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.dashboard}>
        <Navbar />
	  	</div>
	  )
	}
}

export default Dashboard
