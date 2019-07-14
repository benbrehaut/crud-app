import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from './../actions/auth'

import Alert from './../components/Alert'

const DashboardPage = ({ isAuthenticated, isConfirmed, logout }) => (
  <div>
    { !isConfirmed && <Alert text="Please confirm your email address" />}
    { isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button> 
    ) : (
      <Link to="/">Login</Link> 
    )}
  </div>
)

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToProps, { logout })(DashboardPage)