import React from 'react'
import { Redirect } from 'react-router-dom'

// Material UI Styles
const muiStyle = {
}

// Component Style
import style from './style.less'

class SearchBar extends React.Component {
	constructor(props) {
		super();
		this.state = {
		}
  }

  render (){
		return (
	  	<div className={style.searchBar}>
        <h3 className={style.title}>Search</h3>
	  	</div>
	  )
	}
}

export default SearchBar
