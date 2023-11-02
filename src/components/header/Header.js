import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import HeaderStyle from "./Header.module.css";
import Facebook from "../../images/header-images/facebook-icon.png";
import Instagram from "../../images/header-images/instagram-icon.png";
import HeaderTitle from "../../images/header-images/header-title.png";
import BookTitle from "../../images/mobile-comming-soon-images/mobile-coming-soon-title.png";
import BookCover from "../../images/mobile-comming-soon-images/mobile-book-vover-with-fire--bottom.png";
// import Article from "./Article";
// import Interview from "./Interview";
import DesktopHeader from "./DesktopHeader";
import UseMediaQuery from "../UseMediaQuery";
import ArticleMobile from "./ArticleMobile";

const Header = () => {
  const matchesLg = UseMediaQuery("(max-width: 860px)");

  const bkColor = { color: "transparent" };
  const bkColor3 = { color: "transparent" };
  const bkColor4 = { color: "transparent" };
  const bkColor5 = { color: "transparent" };
  const socialMediaCol = HeaderStyle.socialMediaCol;
  const headerImgBack = HeaderStyle.headerImgBack;
  const gradient = HeaderStyle.gradient;
  const SocialBtnSize = HeaderStyle.SocialBtnSize;
  const headerRow = HeaderStyle.headerRow;
  const headerContent = HeaderStyle.headerContent;
  const contentH2 = HeaderStyle.contentH2;
  const headerBtn = HeaderStyle.headerBtn;
  const headerBtnContainer = HeaderStyle.headerBtnContainer;
  const fireBottom = HeaderStyle.fireBottom;
  const bookTitleCon = HeaderStyle.bookTitleCon;
  const bookTitle = HeaderStyle.bookTitle;
  const colBookTitle = HeaderStyle.colBookTitle;
  const rightFireBottom = HeaderStyle.rightFireBottom;
  const bookCoverCon = HeaderStyle.bookCoverCon;
  const bookCover = HeaderStyle.bookCover;
  const purchaseAlertCon = HeaderStyle.purchaseAlertCon;
  const clickBtnCon = HeaderStyle.clickBtnCon;
  const clickBtn = HeaderStyle.clickBtn;

  const headContainer = HeaderStyle.headContainer;
  const headerImageContainer = HeaderStyle.headerImageContainer;
  const headerImage = HeaderStyle.headerImage;
  const bottmBackground = HeaderStyle.bottmBackground;
  const headSection1 = HeaderStyle.headSection1;
  const headerTitleContainer = HeaderStyle.headerTitleContainer;
  const headerTitle = HeaderStyle.headerTitle;
  const headerLinksCon = HeaderStyle.headerLinksCon;

  return (
    <>
      {matchesLg && (
        <>
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
            <div className={fireBottom}></div>
          </header>
          <section>
            <Row className={bookTitleCon}>
              <Col className={colBookTitle}></Col>
              <Col>
                
                <img src={BookTitle} alt="Book Title" className={bookTitle} />
              </Col>
              <Col className={colBookTitle}></Col>
            </Row>
            <div className={rightFireBottom}></div>
            <div className={bookCoverCon}>
              <img src={BookCover} alt="Book Cover" className={bookCover} />
              <div className={purchaseAlertCon}>
                <h1>PURCHASE YOUR COPY</h1>
                <div className={clickBtnCon}>
                  <Button className={clickBtn}>
                    CLICK TO ORDER FROM AMAZON
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <ArticleMobile/>
        </>
      )}
      {!matchesLg && <DesktopHeader />}
    </>
  );
};

export default Header;
