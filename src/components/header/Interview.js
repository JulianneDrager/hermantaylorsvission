import React from 'react'
import StyleInterview from "./Interview.module.css"

const Interview = () => {
    const interviewSubCon = StyleInterview.interviewSubCon
    const interviewDisplay = StyleInterview.interviewDisplay
    const interviewCon = StyleInterview.interviewCon
    const leftCorner = StyleInterview.leftCorner
    const rightCorner = StyleInterview.rightCorner
    return (
    <div className={interviewCon}>
        <img className={leftCorner} src='/assets/left-corner-background.png'alt='left corner background'/>
        <div className={interviewSubCon}>
        <h1><span>LIFE'S CHAPTER</span><br/>HERMAN'S EXCLUSIVE INTERVIEW</h1>
    <div className={interviewDisplay}></div>
    </div>
    <img className={rightCorner} src='/assets/right-corner-background.png'alt='left corner background' />
    </div>
  )
}

export default Interview