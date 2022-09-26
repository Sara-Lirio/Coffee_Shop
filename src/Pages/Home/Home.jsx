import React from 'react'
import Menu from '../../components/Menu/Menu'
import style from './Home.module.css'

const Home = () => {
    return (
        <main>
            <Menu />
            <section className={style.section}>
                <h1 className={style.sectionPhase}>O seu bom dia começa aqui!</h1>
            </section>
        </main>
    )
}

export default Home