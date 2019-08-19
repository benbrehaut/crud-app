import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from './../actions/register'

import RegisterForm from '../components/RegisterForm';
import Card from '../components/Card';
import Logo from '../components/Global/Logo';

class Register extends Component {
  submit = data => this.props.register(data).then(() => this.props.history.push('/dashboard'))

  render() {
    return(
      <>
        <Logo />
    
        <Card>
          <RegisterForm submit={this.submit} />
        </Card>
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