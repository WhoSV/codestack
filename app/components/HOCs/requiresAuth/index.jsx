// import React from 'react'
// import {Redirect} from 'react-router-dom'
//
// // Material UI imports
// import LinearProgress from 'material-ui/LinearProgress'
//
// // Component Actions
// // import { isAuthenticated } from './actions'
//
// export default function requiresAuth(Component, allowedRoles) {
//   class AuthenticatedComponent extends React.Component {
//
//     constructor(props) {
//       super()
//       this.state = {
//         user: {},
//         token: "",
//         loading: true
//       }
//     }
//
//     componentWillMount() {
//       this.init()
//     }
//
//     componentWillUpdate(nextProps, nextState) {}
//
//     init() {
//       let that = this
//       let user = localStorage.user
//       let token = localStorage.token
//
//       try {
//         user = JSON.parse(user)
//
//         isAuthenticated((data) => {
//           console.log("authenticated");
//           that.setState({
//             loading: false, user, token
//           })
//         }, (error) => {
//           console.log("auth error");
//           that.setState({
//             loading: false
//           })
//         })
//
//       } catch (error) {
//         that.setState({
//           loading: false
//         })
//       }
//     }
//
//     render() {
//       const {loading, user, token} = this.state
//       if (loading) {
//         return (
//           <LinearProgress mode="indeterminate"/>
//         )
//       } else if (token && allowedRoles.includes(user.role)) {
//         return (
//           <Component {...this.props}/>
//         )
//       } else {
//         return (
//           <Redirect
//             to={{pathname: '/signout',
//             state: {
//               from: this.props.location
//             }
//           }}/>
//         )
//       }
//     }
//   }
//   return AuthenticatedComponent
// }
