import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { resetPasswordRequest } from './../actions/auth'
import ForgotPasswordForm from '../components/ForgotPasswordForm';

class ForgottenPassword extends Component {
  state = {
    success: false
  }

  submit = data => this.props.resetPasswordRequest(data).then(() => {
    this.setState({
      success: true
    })
  })

  render() {
    const { success } = this.state;
    return(
      <>
        {success ? ( 
            'Email has been sent' 
          ) : (
            <ForgotPasswordForm submit={this.submit} /> 
          )}
      </>
    )
  }
}

export default connect(null, { resetPasswordRequest })(ForgottenPassword);