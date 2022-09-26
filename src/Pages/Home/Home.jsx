import React from 'react'
import Menu from '../../components/Menu/Menu'
import Stamp from '../../components/Stamp/Stamp'
import style from './Home.module.css'
import stamp1 from '../../assets/images/1.png'
import stamp2 from '../../assets/images/2.png'
import stamp3 from '../../assets/images/3.png'

const Home = () => {
    return (
        <main>
            <Menu />
            <section className={style.section}>
                <h1 className={style.sectionPhase}>O seu bom dia começa aqui!</h1>
            </section>
            <div className={style.stamps}>
                <Stamp image={stamp1} title={'high quality'} text={'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.'} />
                <Stamp image={stamp2} title={'awesome aroma'} text={'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.'} />
                <Stamp image={stamp3} title={'take and drink'} text={'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.'} />
            </div>
            <section className={style.sectionPromo}>
                <h1 className={style.titlePromo}>Promoções da Semana</h1>
            </section>
        </main>
    )
}

export default Home