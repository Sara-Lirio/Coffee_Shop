import React from 'react'
import Button from '../Button/Button'
import style from './Menu.module.css'

const Menu = () => {
  return (
    <nav className={style.menu}>
        <Button button={'Bebidas'} className={style.button}/>
        <Button button={'Padaria'} className={style.button}/>
        <Button button={'Doces'} className={style.button}/>
        <Button button={'Store'} className={style.button}/>
        <Button button={'Nosso Café'} className={style.button}/>
        <Button button={'Promoções'} className={style.btnpromo}/>
    </nav>
  )
}

export default Menu