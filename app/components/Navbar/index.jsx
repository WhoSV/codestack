import React from 'react'
import { NavLink } from 'react-router-dom'

// Material UI imports
import AppBar from 'material-ui/AppBar'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import BackButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton'

// Material UI Styles
const muiStyle = {
  appbar: {
    backgroundColor: '#37BDD5',
  },
  homeButtonStyle: {
    padding: 0,
    verticalAlign: 'text-top',
  }
}

// Component Style
import style from './style.less'

// Import static icons
import { img } from '../../static'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let logo = (
      <p className={style.title}><img className={style.logoStyle} src={img.logo}/>CodeStack</p>
    )

    let actionHome = (
      <BackButton
        style={muiStyle.homeButtonStyle}
        tooltip="Home"
        tooltipPosition="bottom-right"
        touch={true}>
          <NavLink to="/dashboard" style={{textDecoration: "none"}}><ActionHome className={style.homeButton}/></NavLink>
      </BackButton>
    )

    if (this.props.history.location.pathname == "/dashboard" ) {
      actionHome = <div></div>
    }

    return (
      <div className={style.navbarContainer}>
        <AppBar
          zDepth={0}
          className={style.appbar}
          style={muiStyle.appbar}
          title={logo}
          iconElementLeft={actionHome}
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

              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Home" /></NavLink>

              {/* Teacher Only */}
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Add Course" /></NavLink>
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Manage Courses" /></NavLink>

              {/* Admin Only */}
              <NavLink to="/admin" style={{textDecoration: "none"}}><MenuItem primaryText="Admin Panel" /></NavLink>

              {/* Student Only */}
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Selected Courses" /></NavLink>

              {/* All Users */}
              <NavLink to="/dashboard" style={{textDecoration: "none"}}><MenuItem primaryText="Account" /></NavLink>
              <NavLink to="/signout" style={{textDecoration: "none"}}><MenuItem primaryText="Log Out" /></NavLink>
            </IconMenu>
          }
        />
      </div>
    )
  }
}

export default Navbar
