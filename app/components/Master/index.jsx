import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// Import components
import SignIn from '../SignIn'
import ResetPassword from '../ResetPassword'
import Register from '../Register'
import Dashboard from '../Dashboard'

// Component Style
import style from './style.less'

export default class Master extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.master}>

          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />

        </div>
      </BrowserRouter>
    )
  }
}
