import React from 'react';
import { Route, Link } from 'react-router-dom';

// Import components
import Navbar from '../Navbar';
import Courses from './Courses';
import CourseBar from './CourseBar';

// Component Style
import style from './style.less';

// Component Actions
import { getCourses, getUser, getFavorites } from './actions';

class Dashboard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      courses: [],
      activeUser: null,
      favorites: []
    };
  }

  componentWillMount() {
    this.state.id = localStorage.id;
    this.activeUser();
    this.updateCourses();
    this.updateFavorites();
  }

  updateDashboard() {
    this.activeUser();
    this.updateCourses();
    this.updateFavorites();
  }

  updateCourses() {
    getCourses(data => {
      this.setState({
        courses: data
      });
    });
  }

  activeUser() {
    getUser(this.state.id, data => {
      this.setState({
        activeUser: data.id
      });
    });
  }

  updateFavorites() {
    getFavorites(data => {
      this.setState({
        favorites: data
      });
    });
  }

  render() {
    return (
      <div className={style.dashboard}>
        <Navbar {...this.props} />

        <Route
          exact
          path={`${this.props.match.url}`}
          component={() => (
            <div className={style.container}>
              <div className={style.coursesContainer}>
                <Courses
                  updateDashboard={this.updateDashboard.bind(this)}
                  favorites={this.state.favorites}
                  activeUser={this.state.activeUser}
                  courses={this.state.courses}
                  {...this.props}
                />
              </div>

              <div className={style.courseBarContainer}>
                <CourseBar
                  favorites={this.state.favorites}
                  activeUser={this.state.activeUser}
                  courses={this.state.courses}
                  {...this.props}
                />
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Dashboard;
