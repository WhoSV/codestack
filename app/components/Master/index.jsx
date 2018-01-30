import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

// Import components
import SignIn from '../SignIn'

// Component Style
import style from './style.less'

export default class Master extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.master}>

          <Route exact path="/signin" component={SignIn}/>

        </div>
      </BrowserRouter>
    )
  }
}
