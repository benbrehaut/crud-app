import React from 'react'
import { classNames } from '../../utils/classNames'

import './SubText.scss'

function SubText(props) {
  const { children, cssClass } = props;
  const className = classNames(
    `o-subtext`,
    cssClass && cssClass
  );

  return(
    <p className={className}>
      { children }
    </p>
  )
}

export default SubText;