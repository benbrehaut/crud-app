import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { resetPasswordRequest } from './../actions/auth'

import ForgotPasswordForm from '../components/ForgotPasswordForm';
import Card from '../components/Card';
import Logo from '../components/Global/Logo';

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
        <Logo />
        <Card>
          {success ? ( 
              'Email has been sent' 
            ) : (
              <ForgotPasswordForm submit={this.submit} /> 
          )}
        </Card>
      </>
    )
  }
}

export default connect(null, { resetPasswordRequest })(ForgottenPassword);