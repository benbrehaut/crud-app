import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { confirm } from './../actions/auth'

import Alert from './../components/Alert'

class Confirmation extends Component {
  state = {
    loading: true,
    success: false
  }

  componentDidMount() {
    this.props
    .confirm(this.props.match.params.token)
    .then(() => {
        this.setState({
          loading: false,
          success: true
        })
    })
    .catch(() => {
      this.setState({
        loading: false,
        success: false
      })
    })
  }

  render() {
    const { loading, success } = this.state;
    console.log(this.state)
    return(
      <>
        { loading && (
          <Alert text="Validating your Email" />
        )}

        { !loading && success && (
          <>
            <Alert text="Thank you, your account is verified." />
            <Link to="/dashboard">Go to the dashboard</Link>
          </>
        )}

        { !loading && !success && (
          <Alert text="Sorry, but there appears to be an error. Please contact us." />
        )} 
      </>
    )
  }
}

export default connect(null, { confirm })(Confirmation);