import React from 'react'
import { Redirect } from 'react-router-dom'

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
        <p>Dashboard</p>
	  	</div>
	  )
	}
}

export default Dashboard
