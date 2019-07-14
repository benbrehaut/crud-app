import React from 'react'
import PropTypes from 'prop-types'

import './Alert.scss'

const Alert = ({ text }) => <div className="alert">{text}</div>

Alert.propTypes = {
  text: PropTypes.string.isRequired
}

export default Alert;