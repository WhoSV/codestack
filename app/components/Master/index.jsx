import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// Import components
import SignIn from '../SignIn'
import SignOut from '../SignOut'
import ResetPassword from '../ResetPassword'
import Register from '../Register'
import Dashboard from '../Dashboard'
import AdminPanel from '../AdminPanel'
import AddCourse from '../AddCourse'
import ManageCourses from '../ManageCourses'
import SelectedCourses from '../SelectedCourses'
import Account from '../Account'

// Component Style
import style from './style.less'

// HOCs
import requiresAuth from '../HOCs/requiresAuth'

export default class Master extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.master}>

          {/* Authorization */}
          <Route exact path="/" component={SignIn}/>
          <Route path="/signout" component={SignOut}/>

          {/* All Users */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />

          {/* Teacher Only */}
          <Route path="/addcourse" component={AddCourse} />
          <Route path="/manage" component={ManageCourses} />

          {/* Admin Only */}
          <Route path="/admin" component={AdminPanel} />

          {/* Student Only */}
          <Route path="/selected" component={SelectedCourses} />

        </div>
      </BrowserRouter>
    )
  }
}
