import React, {Component} from 'react'
import Validator from "validator";
import PropTypes from 'prop-types'

import './RegisterForm.scss'

import Button from './../Button'
import SubText from '../SubText'
import InputField from './../InputField'
import InlineError from '../InlineError/InlineError';

class RegisterForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = e => 
    this.setState({ 
      data: { ...this.state.data, [e.target.name]: e.target.value}
    })

  onSubmit = e => {
    e.preventDefault();

    const errors =  this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  }

  validate = (data) => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Please enter a valid email.'
    if (!data.password) errors.password = 'Please ensure this field is filled out.'
    
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        { errors.global && <InlineError text={errors.global} /> }
        <fieldset>
          <legend>Register</legend>
          <SubText>Please enter your details below to create an account.</SubText>

          <InputField
            type="email"
            id="email"
            name="email"
            labelText="Email Address"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
            errors={errors.email}
          />

          <InputField 
            id="password" 
            type="password" 
            name="password"
            labelText="Password"
            placeholder="Your password"
            value={data.password}
            onChange={this.onChange}
            errors={errors.password}
          />

        </fieldset>
        { loading && 'Loading...'}
        <Button type="submit" variant="primary" cssClass="c-login-form__action">
          Register
        </Button>
      </form>
    )
  }
}

RegisterForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default RegisterForm;