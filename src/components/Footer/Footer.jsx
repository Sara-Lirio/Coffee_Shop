import React from 'react'
import logo from '../../assets/logo/Coffee Shop.png'
import { SiInstagram, SiFacebook, SiWhatsapp, SiApplemusic } from "react-icons/si";
import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <p className={style.contact}>Contato</p>
            <p className={style.contactTel}>+55 11 9 9999-0000 <br/> coffee@coffeeemail.com.br</p>
            <p className={style.contactEnd}>Rua dos Bobos, nº 0 - Terra de Ninguém, Lugar Nenhum</p>
            <nav className={style.icons}>
                <SiInstagram />
                <SiFacebook />
                <SiWhatsapp />
                <SiApplemusic />
            </nav>
            <img src={logo} className={style.logo} />
        </footer>
    )
}

export default Footer