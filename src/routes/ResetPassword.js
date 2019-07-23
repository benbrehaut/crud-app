import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { validateToken, resetPassword } from './../actions/auth'

import Alert from './../components/Alert'
import ResetPasswordForm from './../components/ResetPasswordForm'

class ResetPassword extends Component {
  state = {
    loading: true,
    success: false
  };

  componentDidMount() {
    this.props
      .validateToken(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  submit = data =>
    this.props
      .resetPassword(data)
      .then(() => this.props.history.push("/"));

  render() {
    const { loading, success } = this.state;
    const token = this.props.match.params.token
    return(
      <>
        { loading && (
          <p>loading</p>
        )}

        { !loading && success && (
          <>
            <ResetPasswordForm submit={this.submit} token={token} />
          </>
        )}

        { !loading && !success && (
          <Alert text="Sorry, but there appears to be an error. Please contact us." />
        )} 
      </>
    )
  }
}

export default connect(null, { validateToken, resetPassword })(
  ResetPassword
);