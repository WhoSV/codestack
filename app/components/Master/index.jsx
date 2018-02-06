import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// Import components
import SignIn from '../SignIn'
import SignOut from '../SignOut'
import ResetPassword from '../ResetPassword'
import Register from '../Register'
import Dashboard from '../Dashboard'

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

          <Route path="/reset" component={ResetPassword} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />

        </div>
      </BrowserRouter>
    )
  }
}
