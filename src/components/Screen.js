import React from 'react'
import Header from "./header/Header"
import Contact from './contact/Contact'
import InterviewMobile from './interview/InterviewMobile'


const Screen = () => {
  return (
    <div>
        <Header/>
        <InterviewMobile/>
        <Contact/>
    </div>
  )
}

export default Screen