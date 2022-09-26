import React from 'react'
import Button from '../../components/Button/Button'
import { CgCoffee } from "react-icons/cg"
import style from './Section.module.css'
import { Link } from 'react-router-dom'

const Section = ({ text, section, button1, button2 }) => {
    return (
        <section className={style.section}>
            <p className={style.text}>Escolha {text}</p>
            <CgCoffee className={style.icon} />
            <h2 className={style.title}>{section}</h2>
            <Button className={style.button1} button={button1} />
            <Button className={style.button2} button={button2} />
            <Link>
                <p className={style.text}> voltar ao menu</p>
            </Link>
        </section>
    )
}

export default Section