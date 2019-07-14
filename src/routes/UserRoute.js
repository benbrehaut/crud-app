import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

/**
 * UserRoute
 * We are basically recreating Route component from 'react-router' and if they not authenticated, redirect them back to root of app
 */

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} render={props => isAuthenticated ? <Component { ...props} />: <Redirect to="/" /> } />
)

function mapStateToprops(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

export default connect(mapStateToprops)(UserRoute);