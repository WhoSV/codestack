import React from 'react'

// Component Style
import style from './style.less'

class Sidebar extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
			<div className={style.sidebar}>
	      <h3 className={style.title}>Sidebar</h3>
			</div>
	  )
	}
}

export default Sidebar
