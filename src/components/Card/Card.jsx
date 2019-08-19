import React from 'react'

import './Card.scss'

function Card(props) {
  const { children } = props;

  return(
    <section className="o-card">
      { children }
    </section>
  )
}

export default Card;