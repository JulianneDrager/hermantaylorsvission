import React from 'react'
import StyleInterview from "./Interview.module.css"

const Interview = () => {
    const interviewSubCon = StyleInterview.interviewSubCon
    const interviewDisplay = StyleInterview.interviewDisplay
    const interviewCon = StyleInterview.interviewCon
    const leftCorner = StyleInterview.leftCorner
    const rightCorner = StyleInterview.rightCorner
    const goldWords = StyleInterview.goldWords
    const mailCon = StyleInterview.mailCon
    return (
    <div className={interviewCon}>
        <img className={leftCorner} src='/assets/left-corner-background.png'alt='left corner background'/>
        <div className={interviewSubCon}>
        <h1><span className={goldWords}>LIFE'S CHAPTER</span><br/>HERMAN'S EXCLUSIVE INTERVIEW</h1>
    <div className={interviewDisplay}></div>
    <div className={mailCon}>
      <img src='/assets/email-icon.png' alt='mail box'/>
      <h2>CONTACT</h2>
      <h2>HERMAN@GMAIL.COM</h2>
    </div>
    </div>
    <img className={rightCorner} src='/assets/right-corner-background.png'alt='left corner background' />
    </div>
  )
}

export default Interview