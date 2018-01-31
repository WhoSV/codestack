import React from 'react'
import { NavLink } from 'react-router-dom'

// Material UI imports
import AppBar from 'material-ui/AppBar'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import IconButton from 'material-ui/IconButton';

// Material UI Styles
const muiStyle = {
  appbar: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#37BDD5',
    textAlign: 'left',
    zIndex: 999
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
      <AppBar
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

            <NavLink to="/signin" style={{textDecoration: "none"}}><MenuItem primaryText="Log Out" /></NavLink>
          </IconMenu>
        }
      />
    )
  }
}

export default Navbar
