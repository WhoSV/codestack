import React from 'react'
import {Route, Link} from 'react-router-dom'

// Import components
import SearchBar from './SearchBar'
import CourseList from './CourseList'

// Component Style
import style from './style.less'

class Courses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={style.courses}>
        <Route exact path="/dashboard" component={SearchBar} history={this.props.history}/>
        <Route exact path="/dashboard" component={CourseList} history={this.props.history}/>
      </div>
    )
  }
}

export default Courses
