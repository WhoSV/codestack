import React from 'react'
import {Route, Link} from 'react-router-dom'

// Import components
import Navbar from '../Navbar'
import Courses from './Courses'
import CourseBar from './CourseBar'
import ActiveCourse from './ActiveCourse'

// Component Style
import style from './style.less'

class Dashboard extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (<div className={style.dashboard}>
      <Navbar {...this.props}/>

      <Route exact="exact" path={`${this.props.match.url}`} component={() => (<div className={style.container}>
          <div className={style.coursesContainer}>
            <Courses {...this.props}/>
          </div>

          <div className={style.courseBarContainer}>
            <CourseBar {...this.props}/>
          </div>
        </div>)}/> {/* change url to course name */}
      <Route path={`${this.props.match.url}/activecourse`} component={ActiveCourse}/>
    </div>)
  }
}

export default Dashboard
