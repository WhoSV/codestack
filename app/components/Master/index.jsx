import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Import components
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import ResetPassword from '../ResetPassword';
import Register from '../Register';
import Dashboard from '../Dashboard';
import AdminPanel from '../AdminPanel';
import AddCourse from '../AddCourse';
import MyProfile from '../MyProfile';
import Account from '../Account';
import EditCourse from '../EditCourse';

// Component Style
import style from './style.less';

export default class Master extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={style.master}>
          {/* Authorization */}
          <Route path="/" exact component={SignIn} />
          <Route path="/signout" component={SignOut} />

          {/* All Users */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reset" component={ResetPassword} />
          <Route path="/register" component={Register} />
          <Route path="/account" component={Account} />
          <Route path="/profile" component={MyProfile} />

          {/* Teacher Only */}
          <Route path="/addcourse" component={AddCourse} />
          <Route path="/editcourse" component={EditCourse} />

          {/* Admin Only */}
          <Route path="/admin" component={AdminPanel} />
        </div>
      </BrowserRouter>
    );
  }
}
