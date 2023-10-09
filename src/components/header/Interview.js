import React from 'react'
import StyleInterview from "./Interview.module.css"

const Interview = () => {
    const interviewSubCon = StyleInterview.interviewSubCon
    const interviewDisplay = StyleInterview.interviewDisplay
    return (
    <div>
        <div className={interviewSubCon}>
        <h1><span>Life'S CHAPTER</span><br/>HERMAN'S EXCLUSIVE INTERVIEW</h1>
    <div className={interviewDisplay}></div>
    </div>
    </div>
  )
}

export default Interview