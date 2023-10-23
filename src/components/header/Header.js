import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import HeaderStyle from "./Header.module.css";
import Article from "./Article";
import Interview from "./Interview";
import TitleImg from "../../images/mobile-header-images/mobile-header-title.png"
import Facebook from "../../images/mobile-header-images/mobile-facebook.png"
import Instagram from "../../images/mobile-header-images/mobile-instagram.png"

const DesktopHeader = () => {
  const headerImgBack = HeaderStyle.headerImgBack;
  const gradient = HeaderStyle.gradient;
  const socialBtnSize = HeaderStyle.socialBtnSize;
  const headerRow = HeaderStyle.headerRow;
  const socialMediaCol = HeaderStyle.socialMediaCol;
  const contentH2 = HeaderStyle.contentH2;
  const headerContent = HeaderStyle.headerContent;
  const fireBottom = HeaderStyle.fireBottom;
  const bkcolor = { color: "transparent" };
  const bkcolor3 = { color: "transparent" };
  const bkcolor4 = { color: "transparent" };
  const bkcolor5 = { color: "transparent" };

  const headContainer = HeaderStyle.headContainer;
  const headerImageContainer = HeaderStyle.headerImageContainer;
  const headerImage = HeaderStyle.headerImage;
  const bottmBackground = HeaderStyle.bottmBackground;
  const headSection1 = HeaderStyle.headSection1;
  const headerTitleContainer = HeaderStyle.headerTitleContainer;
  const headerTitle = HeaderStyle.headerTitle;
  
  const headerBtn = HeaderStyle.headerBtn;
  const headerBtnContainer = HeaderStyle.headerBtnContainer;
  const headerLinksCon = HeaderStyle.headerLinksCon;
  
  return (
    <header>
      <div className={headContainer}>
        <div className={headSection1}>
          <div className={headerTitleContainer}>
            {/* note on the tutorial I skip to this section, remove the quotes and replace with {} */}
            <Image className={headerTitle} src={TitleImg} alt="Header Title" />
          </div>
          <div className={headerImgBack}>
            <div className={gradient}>
              <Row className={headerRow}>
                <Col style={bkcolor}>1</Col>
                <Col className={socialMediaCol}>
                  <div className={headerLinksCon}>
                    <a href="/">
                      <Image
                        className={socialBtnSize}
                        src={Facebook}
                        alt="Facebook Icon" />
                    </a>
                    <a href="/">
                      <Image
                        className={socialBtnSize}
                        src={Instagram}
                        alt="Instagram Icon" />
                    </a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col style={bkcolor3}>3</Col>
                <Col style={bkcolor4}>
                  4
                  <div className={headerContent}>
                    <h2 className={contentH2}> 
                    AUTHOR & <br /> PUBLIC SPEAKER
                    </h2>
                  </div>
                </Col>
                <Col style={bkcolor5}>
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
      <div className={fireBottom}></div>
      {/* <Article />
      <Interview /> */}
    </header>
  );
};

export default DesktopHeader;
