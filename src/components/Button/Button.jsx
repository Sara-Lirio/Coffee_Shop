import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({route, className, button}) => {
  return (
    <Link to={route} className={className}>{button}</Link>
  )
}

export default Button