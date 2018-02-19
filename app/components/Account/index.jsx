import React from 'react'

// Import components
import Navbar from '../Navbar'

// Component Style
import style from './style.less'

class Account extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.account}>
				<Navbar {...this.props}/>

        <p>account</p>
				<p>account</p>
				<p>account</p>
				<p>account</p>
				<p>account</p>
	  	</div>
	  )
	}
}

export default Account
