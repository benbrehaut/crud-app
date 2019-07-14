import React from 'react'
import PropTypes from 'prop-types'

import './InlineError.scss'

const InlineError = ({ text }) => <span className="inline-error">{text}</span>

InlineError.propTypes = {
  text: PropTypes.string.isRequired
}

export default InlineError;