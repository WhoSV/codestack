import React from 'react'
import {NavLink} from 'react-router-dom'

// Material UI imports
import AppBar from 'material-ui/AppBar'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import BackButton from 'material-ui/IconButton'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'

// Material UI Styles
const muiStyle = {
  appbar: {
    backgroundColor: '#37BDD5'
  },
  homeButtonStyle: {
    padding: 0,
    verticalAlign: 'text-top'
  }
}

// Component Style
import style from './style.less'

// Import static icons
import {img} from '../../static'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let logo = (<p className={style.title}><img className={style.logoStyle} src={img.logo}/>CodeStack</p>)

    let actionHome = (
      <BackButton
        style={muiStyle.homeButtonStyle}
        tooltip="Home"
        tooltipPosition="bottom-right"
        touch={true}>
          <NavLink
            to="/dashboard"
            style={{textDecoration: "none"}}>
              <ActionHome className={style.homeButton}/>
          </NavLink>
      </BackButton>
    )

    if (this.props.history.location.pathname == "/dashboard") {
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
              iconButtonElement = {
                <IconButton>
                    <MenuIcon/>
                </IconButton>
              }
              targetOrigin = {{horizontal: 'right', vertical: 'top'}}
              anchorOrigin = {{horizontal: 'right', vertical: 'top'}}
              >
              {/* All Users */}
              <NavLink
                to="/profile"
                style={{textDecoration: "none"}}>
                  <MenuItem primaryText="View My Profile"/>
              </NavLink>
              <Divider/>

              {/* Teacher Only */}
              <NavLink
                to="/addcourse"
                style={{textDecoration: "none"}}>
                  <MenuItem primaryText="Add New Course"/>
              </NavLink>

              {/* Admin Only */}
              <NavLink
                to="/admin"
                style={{textDecoration: "none"}}>
                  <MenuItem primaryText="Admin Panel"/>
                </NavLink>

              <NavLink
                to="/account"
                style={{textDecoration: "none"}}>
                  <MenuItem primaryText="My Account"/>
              </NavLink>
              <Divider/>

              <NavLink
                to="/signout"
                style={{textDecoration: "none"}}>
                  <MenuItem primaryText="Log Out"/>
              </NavLink>
            </IconMenu>
          }
        />
      </div>
    )
  }
}

export default Navbar
