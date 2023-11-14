import React from "react";
import ArticleMobileStyle from "./articleMobile.module.css";
import UseMediaQuery from '../UseMediaQuery'
import HeaderStyle from "./Header.module.css";
import Article from "./Article";
import { Row, Col, Button } from "react-bootstrap";
import BookTitle from "../../images/mobile-comming-soon-images/mobile-coming-soon-title.png";
import BookCover from "../../images/mobile-comming-soon-images/mobile-book-vover-with-fire--bottom.png";

function ArticleMobile() {
  const matchesLg = UseMediaQuery("(max-width:860px)")
  const quoteConMobile = ArticleMobileStyle.quoteConMobile;
  const quoteMarkUpMobile = ArticleMobileStyle.quoteMarkUpMobile;
  const quoteMarkDownMobile = ArticleMobileStyle.quoteMarkDownMobile;
  const orderBtnMobile = ArticleMobileStyle.orderBtnMobile;
  const bookQuoteWrapMobile = ArticleMobileStyle.bookQuoteWrapMobile;
  const bookTitleCon = HeaderStyle.bookTitleCon;
  const bookTitle = HeaderStyle.bookTitle;
  const colBookTitle = HeaderStyle.colBookTitle;
  const rightFireBottom = HeaderStyle.rightFireBottom;
  const bookCoverCon = HeaderStyle.bookCoverCon;
  const bookCover = HeaderStyle.bookCover;
  const purchaseAlertCon = HeaderStyle.purchaseAlertCon;
  const clickBtnCon = HeaderStyle.clickBtnCon;
  const clickBtn = HeaderStyle.clickBtn;
  return (
    <>
     {matchesLg && (
      <div>
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
    <div className={bookQuoteWrapMobile}>
      <div className={quoteConMobile}>
        <img
          className={quoteMarkUpMobile}
          src="/assets/quote-corner.png"
          alt="quote"
        />
        <h2>ENIM AD</h2>
        <p>
          For more than 30 years, people like you have been elevating their
          careers with Cisco Certifications. Learn how these IT professionals
        </p>
        <img
          className={quoteMarkDownMobile}
          src="/assets/quote-corner.png"
          alt="quote"
        />
      </div>
      <div className={quoteConMobile}>
        <img
          className={quoteMarkUpMobile}
          src="/assets/quote-corner.png"
          alt="quote"
        />
        <h2>ENIM AD</h2>
        <p>
          For more than 30 years, people like you have been elevating their
          careers with Cisco Certifications. Learn how these IT professionals
        </p>
        <img
          className={quoteMarkDownMobile}
          src="/assets/quote-corner.png"
          alt="quote"
        />
      </div>
      <button className={orderBtnMobile}>CONTACT <br/>HERMAN TODAY</button>
    </div>
    </div>
    )}
    {!matchesLg && <Article/>}
    </>
  );
}

export default ArticleMobile;
