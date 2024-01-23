import React from 'react'
import style from './Home.module.css'
import Nav from '../../components/nav/Nav'
import InputChat from '../../components/inputChat/InputChat'
export default function Home() {
  return (
    <div className={style.homeContainer}>
    <Nav/>
    <div className={style.input}>
    <InputChat/>
    </div>
    </div>
  )
}
