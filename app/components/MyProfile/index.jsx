import React from 'react'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

class MyProfile extends React.Component {
	constructor(props) {
		super()
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.myProfile}>
				<Navbar {...this.props}/>

        <p>MyProfile</p>
				<p>MyProfile</p>
				<p>MyProfile</p>
				<p>MyProfile</p>
				<p>MyProfile</p>
	  	</div>
	  )
	}
}

export default MyProfile
