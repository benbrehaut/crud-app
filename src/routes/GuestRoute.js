import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

/**
 * GuestRoute
 * We are basically recreating Route component from 'react-router' but if they are already authenticated, redirect them to dashboard 
 * as we don't want them access the login page
 */

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => !isAuthenticated ? <Component { ...props} />: <Redirect to="/dashboard" /> } />
)

function mapStateToprops(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToprops)(GuestRoute);