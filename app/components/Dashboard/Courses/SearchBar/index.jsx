import React from 'react'

// Material UI imports
import SearchIcon from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

// Material UI Styles
const muiStyle = {
	underlineStyle: {
		border: '0.5px solid #30CFD0',
	},
	submitButton: {
		minWidth: 50,
		width: 50,
	},
	submitButtonLabelStyle: {
		padding: 0,
	}
}

// Component Style
import style from './style.less'

class SearchBar extends React.Component {
	constructor(props) {
		super()
		this.state = {
			searchText: "",
		}
		this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
  }

	handleSearchTextChange(event){
		this.setState({
			searchText: event.target.value
		})
	}

  render (){
		return (
	  	<div className={style.searchBar}>
				<form onSubmit={this.handleSubmit}>
					<TextField
						autoCorrect="none"
						autoCapitalize="none"
						hintText="Search.."
						type="text"
						value={this.state.searchText}
						className={style.textFieldStyle}
						underlineFocusStyle={muiStyle.underlineStyle}
						onChange={this.handleSearchTextChange}
					/>

					<FlatButton
  					type="submit"
  					label={<SearchIcon className={style.searchIconStyle} />}
						labelStyle={muiStyle.submitButtonLabelStyle}
  					style={muiStyle.submitButton}
					/>
				</form>
	  	</div>
	  )
	}
}

export default SearchBar
