import React, {Component} from 'react'
import Validator from "validator";
import PropTypes from 'prop-types'

import './ForgotPasswordForm.scss'

import InlineError from '../InlineError/InlineError';
import Button from './../Button'
import SubText from '../SubText'
import InputField from './../InputField'

class ForgotPasswordForm extends Component {
  state = {
    data: {
      email: '',
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
    
    return errors;
  }

  render() {
    const { data, errors, loading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        { !!errors.global && <InlineError text={errors.global} /> }
        <fieldset>

          <legend>Forgotten Password</legend>
          <SubText>Enter your email address. We will send you an email with a link to reset your password.</SubText>
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

        </fieldset>

        { loading && 'Loading...'}

        <Button type="submit" variant="primary" cssClass="c-login-form__action">
          Get reset link
        </Button>
      </form>
    )
  }
}

ForgotPasswordForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default ForgotPasswordForm;