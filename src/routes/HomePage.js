import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { logout } from '../actions/auth'

const HomePage = ({ isAuthenticated, logout }) => (
  <>
    <h1>Homepage</h1>
    { isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button> 
    ) : (
      <Link to="/login">Login</Link> 
    )}
  </>
)

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapSateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapSateToProps, { logout })(HomePage);