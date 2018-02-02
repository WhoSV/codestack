import React from 'react'
import { NavLink } from 'react-router-dom'

// Material UI imports
import AppBar from 'material-ui/AppBar'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import IconButton from 'material-ui/IconButton'

// Material UI Styles
const muiStyle = {
  appbar: {
    backgroundColor: '#37BDD5',
  },
}

// Component Style
import style from './style.less'

// Import static icons
import { img } from '../../static'

class Navbar extends React.Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className={style.navbarContainer}>
        <AppBar
          zDepth={0}
          className={style.appbar}
          style={muiStyle.appbar}
          title="CodeStack"
          iconElementLeft={
            <img className={style.logoStyle} src={img.logo}/>
          }
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MenuIcon />
                </IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >

              {/* Teacher Only */}
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Add Course" /></NavLink>
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Manage Courses" /></NavLink>

              {/* Admin Only */}
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Admin Panel" /></NavLink>

              {/* Student Only */}
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Selected Courses" /></NavLink>

              {/* All Users */}
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Account" /></NavLink>
              <NavLink to="/signin" style={{textDecoration: "none"}}><MenuItem primaryText="Log Out" /></NavLink>
            </IconMenu>
          }
        />
      </div>
    )
  }
}

export default Navbar
