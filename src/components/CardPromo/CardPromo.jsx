import React from 'react'
import frappuccino from '../../assets/images/cookies-n-creme-frappuccino-onwhite.png'
import cafeExpresso from '../../assets/images/cafe-expresso.webp'
import wafle from '../../assets/images/wafle.png'
import cappuccino from '../../assets/images/cappuccino.webp'
import paoQueijo from '../../assets/images/paodequeijo-medio-menor.png'
import chaGelado from '../../assets/images/Iced-Tea.png'
import style from './CardPromo.module.css'

const CardPromo = () => {

    return (
        <section className={style.container}>
            <div className={style.carousel}>
                <div className={style.item}>
                    <img className={style.img} src={frappuccino} />
                </div>
                <div className={style.item}>
                    <img className={style.img} src={cafeExpresso} />
                </div>
                <div className={style.item}>
                    <img className={style.img} src={wafle} />
                </div>
                <div className={style.item}>
                    <img className={style.img} src={cappuccino} />
                </div>
                <div className={style.item}>
                    <img className={style.img} src={paoQueijo} />
                </div>
                <div className={style.item}>
                    <img className={style.imgtea} src={chaGelado} />
                </div>
                
            </div>
        </section>
    )
}

export default CardPromo