import React from 'react'
import { Link } from 'react-router-dom'
import CardPromo from '../../components/CardPromo/CardPromo'
import style from './Promo.module.css'

const Promo = () => {
    return (
        <div>
            <h1 className={style.titlePromo}>Promoções</h1>
            <CardPromo />
            <Link to='/'>
                <p className={style.text}> voltar ao menu</p>
            </Link>
        </div>
    )
}

export default Promo