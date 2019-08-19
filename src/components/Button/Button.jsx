import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from './../../utils/classNames'

import './Button.scss'

function Button(props) {
  const { type, children, cssClass, variant, isExternal, url } = props;
  const className = classNames(
    `o-btn`,
    variant && `o-btn--${variant}`,
    cssClass && cssClass
  );

  if (url) {
    return isExternal ? (
      <a href={ url } data-external className={className}>
        { children }
      </a>
    ) : (
      <Link to={ url } className={className}>
        { children }
      </Link>
    )
  }

  return(
    <button 
      type={ type ? type : "button" } className={className}>
      { children }
    </button>
  )
}

export default Button;