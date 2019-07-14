import React, {Component} from 'react'
import Validator from "validator";
import PropTypes from 'prop-types'

import './LoginForm.scss'

import InlineError from '../InlineError/InlineError';

class LoginForm extends Component {
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
          <legend>Login</legend>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          { errors.email && <InlineError text={errors.email} />}

          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password"
            placeholder="Your password"
            value={data.password}
            onChange={this.onChange}
          />
          { errors.password && <InlineError text={errors.password} />}

        </fieldset>
        { loading && 'Loading...'}
        <button type="submit">Login</button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
}

export default LoginForm;