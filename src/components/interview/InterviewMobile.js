import React from 'react'
import UseMediaQuery from '../UseMediaQuery'
import Interview from './Interview';
import { Row, Col } from "react-bootstrap";
import contactIcon from "../../images/mobile-interview-images/mobile-contact-icon.png"
import topFire from "../../images/mobile-interview-images/mobile-top-fire.png"
import InterviewMobileStyle from "./interviewMobile.module.css"

function InterviewMobile() {
    const matchesLg = UseMediaQuery("(max-width: 860px)");

    const mobileInterviewCon = InterviewMobileStyle.mobileInterviewCon
    const topFireImg = InterviewMobileStyle.topFireImg
    const InterviewMobileContent = InterviewMobileStyle.InterviewMobileContent
    const purpleBox = InterviewMobileStyle.purpleBox
    const InterviewMobileh2 = InterviewMobileStyle.InterviewMobileh2
    const h2Purple= InterviewMobileStyle.h2Purple
  return (
    <>
        {matchesLg && (
    <div className={mobileInterviewCon}>
      <img className={topFireImg} src={topFire} alt='Top Fire' />
        <Row className={InterviewMobileContent}>
          <Col>
          <img src={contactIcon} alt='Contact Icon'/>
          <h2 className={h2Purple} >LIFE'S CHAPTER</h2>
          <h2 className={InterviewMobileh2}>HERMAN'S EXCLUSIVE</h2>
          <h2 className={InterviewMobileh2}>INTERVIEW</h2>
          </Col>
          <Col className={purpleBox}></Col>
        </Row>
        
    </div>
    )}
    {!matchesLg && <Interview/>}
    </>
  )
}

export default InterviewMobile