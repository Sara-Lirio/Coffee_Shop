import React from 'react'
import Logo from '../../assets/logo/logo_coffeeshop.png'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <img src={Logo} className={style.logo}/>
    </header>
  )
}

export default Header