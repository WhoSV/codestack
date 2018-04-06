import React from 'react'
import {Route, Link} from 'react-router-dom'

// Import components
import Navbar from '../Navbar'
import Courses from './Courses'
import CourseBar from './CourseBar'

// Component Style
import style from './style.less'

// Component Actions
import {getCourses} from './actions'

class Dashboard extends React.Component {
  constructor(props) {
    super()
    this.state = {
      courses: []
    }
  }

  componentWillMount() {
    this.updateCourses()
  }

  updateCourses() {
    getCourses((data) => {
      this.setState({
        courses: data
      });
    })
  }

  render() {
    return (
      <div className={style.dashboard}>
        <Navbar {...this.props}/>

        <Route
          exact
          path={`${this.props.match.url}`}
          component={() => (
            <div className={style.container}>
              <div className={style.coursesContainer}>
                <Courses
                  courses={this.state.courses}
                  {...this.props}/>
              </div>

              <div className={style.courseBarContainer}>
                <CourseBar
                  courses={this.state.courses}
                  {...this.props}/>
              </div>
            </div>
          )}
        />

      </div>
    )
  }
}

export default Dashboard
