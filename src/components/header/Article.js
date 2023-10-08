import React from 'react'
import ArticleStyle from "./Article.module.css"

const Article = () => {
    const bookTitleCon = ArticleStyle.bookTitleCon
    const subBookTitleCon = ArticleStyle.subBookTitleCon
    const bookCoverCon = ArticleStyle.bookCoverCon
    const bookCover = ArticleStyle.bookCover
    const quoteCon = ArticleStyle.quoteCon
    const quoteMarkUp = ArticleStyle.quoteMarkUp
    const quoteMarkDown = ArticleStyle.quoteMarkDown
    const orderBtn = ArticleStyle.orderBtn

  return (
    <article>
        <div className={bookTitleCon}>
            <div className={subBookTitleCon}>
            <img src='/assets/book-title.png' alt='Book Title'/>
            </div>
        </div>
        <div className={bookCoverCon}>
          <img className={bookCover} src='/assets/book-cover-with-fire-bottom.png' alt='Book Cover'/>
        <div>
        <div className={quoteCon}>
          <img className={quoteMarkUp} src='/assets/quote-corner.png' alt='quote'/>
          <h2>ENIM AD</h2>
          <p>For more than 30 years, people like you have been elevating their careers with Cisco Certifications. Learn how these IT professionals</p>
          <img className={quoteMarkDown} src='/assets/quote-corner.png' alt='quote'/>
        </div>
        <div className={quoteCon}>
          <img className={quoteMarkUp} src='/assets/quote-corner.png' alt='quote'/>
          <h2>ENIM AD</h2>
          <p>For more than 30 years, people like you have been elevating their careers with Cisco Certifications. Learn how these IT professionals</p>
          <img className={quoteMarkDown} src='/assets/quote-corner.png' alt='quote'/>
        </div>
        <button className={orderBtn}>ORDER NOW</button>
        </div>
        </div>
    </article>
  )
}

export default Article