import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { login } from './../actions/auth'
import LoginForm from '../components/LoginForm';
import Card from '../components/Card';
import Logo from '../components/Global/Logo';

class Login extends Component {
  submit = data => this.props.login(data).then(() => this.props.history.push('/dashboard'))

  render() {
    return(
      <>
        <Logo />
    
        <Card>
          <LoginForm submit={this.submit} />
        </Card>
      </>
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null, { login })(Login);