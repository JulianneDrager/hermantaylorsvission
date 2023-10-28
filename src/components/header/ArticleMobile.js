import React from "react";
import ArticleMobileStyle from "./articleMobile.module.css";

function ArticleMobile() {
  const quoteConMobile = ArticleMobileStyle.quoteConMobile;
  const quoteMarkUpMobile = ArticleMobileStyle.quoteMarkUpMobile;
  const quoteMarkDownMobile = ArticleMobileStyle.quoteMarkDownMobile;
  const orderBtnMobile = ArticleMobileStyle.orderBtnMobile;
  const bookQuoteWrapMobile = ArticleMobileStyle.bookQuoteWrapMobile;
  return (
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
  );
}

export default ArticleMobile;
