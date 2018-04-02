import React from 'react'

// Import components
import Navbar from '../Navbar'
import UserContainer from './UserContainer'
import ContentContainer from './ContentContainer'

class AdminPanel extends React.Component {
  constructor(props) {
    super()
    this.state = {
      activeUser: []
    }
  }

  componentWillMount() {
    this.activeUser()
  }

  activeUser() {
    let user = JSON.parse(localStorage.activeUser)
    this.setState({
      activeUser: user
    });
  }

  render() {
    return (
      <div>
        <Navbar {...this.props}/>
        <UserContainer
          activeUser = {this.state.activeUser}/>
        <ContentContainer/>
      </div>
    )
  }
}

export default AdminPanel
