import React from 'react'
import {Link} from 'react-router-dom'

import { classNames } from '../../../utils/classNames'

import './Logo.scss'

function Logo(props) {
  const { cssClass } = props;
  const className = classNames(
    `o-logo`,
    cssClass && cssClass
  );

  return(
    <div className={className}>
      <Link to="/">BookCRUD</Link>
    </div>
  )
}

export default Logo;