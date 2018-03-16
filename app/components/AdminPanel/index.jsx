import React from 'react'

// Import components
import Navbar from '../Navbar'
import UserContainer from './UserContainer'
import ContentContainer from './ContentContainer'

class AdminPanel extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (<div>
      <Navbar {...this.props}/>
      <UserContainer/>
      <ContentContainer/>
    </div>)
  }
}

export default AdminPanel
