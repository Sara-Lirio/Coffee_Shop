import React from 'react'
import style from './Stamp.module.css'

const Stamp = ({image,title,text}) => {
  return (
    <div className={style.stamp}>
        <img className={style.image} src={image}/> 
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>{text}</p>
    </div>
  )
}

export default Stamp