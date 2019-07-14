import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from './../actions/register'
import RegisterForm from '../components/RegisterForm';

class Register extends Component {
  submit = data => this.props.register(data).then(() => this.props.history.push('/dashboard'))

  render() {
    return(
      <>
        <h1>Register</h1>
    
        <RegisterForm submit={this.submit} />
      </>
    )
  }
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default connect(null, { register })(Register);