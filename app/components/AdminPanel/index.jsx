import React from 'react'
import { Redirect } from 'react-router-dom'

// Import components
import Navbar from '../Navbar'
import UserContainer from '../UserContainer'

class AdminPanel extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<div>
				<Navbar />
				<UserContainer/>
	  	</div>
	  )
	}
}

export default AdminPanel
