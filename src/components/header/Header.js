import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import HeaderStyle from "./Header.module.css";
import Facebook from "../../images/header-images/facebook-icon.png"
import Instagram from "../../images/header-images/instagram-icon.png"
import HeaderTitle from "../../images/header-images/header-title.png"
import Article from "./Article";
import Interview from "./Interview";

const DesktopHeader = () => {
  const bkColor = { color: "transparent" };
  const bkColor3 = {color: "transparent" };
  const bkColor4 = { color: "transparent" };
  const bkColor5 = { color: "transparent" };
  const socialMediaCol = HeaderStyle.socialMediaCol;
  const headerImgBack = HeaderStyle.headerImgBack;
  const gradient = HeaderStyle.gradient;
  const SocialBtnSize = HeaderStyle.SocialBtnSize;
  const headerRow = HeaderStyle.headerRow
  const headerContent = HeaderStyle.headerContent;
  const contentH2 = HeaderStyle.contentH2;
  const headerBtn = HeaderStyle.headerBtn;
  const headerBtnContainer = HeaderStyle.headerBtnContainer;
  const fireBottom = HeaderStyle.fireBottom;


  const headContainer = HeaderStyle.headContainer;
  const headerImageContainer = HeaderStyle.headerImageContainer;
  const headerImage = HeaderStyle.headerImage;
  const bottmBackground = HeaderStyle.bottmBackground;
  const headSection1 = HeaderStyle.headSection1;
  const headerTitleContainer = HeaderStyle.headerTitleContainer;
  const headerTitle = HeaderStyle.headerTitle;
  const headerLinksCon = HeaderStyle.headerLinksCon;
  
  return (
    <header>
      <div className={headContainer}>
        <div className={headSection1}>
          <div className={headerTitleContainer}>
            <img
              className={headerTitle}
              // note on the tutorial I skip to this section, remove the quotes and replace with {}
              src={HeaderTitle}
              alt="Header Title"
            />
          </div>
          <div className={headerImgBack}>
            <div className={gradient}>
              <Row className={headerRow}>
                <Col style={bkColor}>1</Col>
                <Col className={socialMediaCol}>
                
                  <div className={headerLinksCon}>
                    <a href="/">
                      <img
                      className={SocialBtnSize} 
                      src={Facebook} 
                      alt="Facebook Icon" 
                      />
                    </a>
                    <a href="/">
                      <img
                        className={SocialBtnSize}
                        src={Instagram}
                        alt="Instagram Icon"
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={bkColor3}>3</Col>
                <Col style={bkColor4}>
                  4
                <div className={headerContent}>
            <h2 className={contentH2}>
              AUTHOR & <br /> PUBLIC SPEAKER
            </h2>
            </div>
                </Col>
                <Col style={bkColor5}>
                  5
                <div className={headerBtnContainer}>
                <Button className={headerBtn}>PURCHASE NOW</Button>
              </div>
                </Col>
              </Row>
            </div>
          </div>
        
        </div>
        
      </div>
      <div className={fireBottom} ></div>
      <div  ></div>
      {/* <Article />
      <Interview /> */}
    </header>
  );
};

export default DesktopHeader;
