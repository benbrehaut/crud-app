import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from './../actions/auth'
import LoginForm from '../components/LoginForm';

class Login extends Component {
  submit = data => this.props.login(data).then(() => this.props.history.push('/dashboard'))

  render() {
    return(
      <>
        <h1>Login</h1>
    
        <LoginForm submit={this.submit} />
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