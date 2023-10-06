import React from 'react'
import ArticleStyle from "./Article.module.css"

const Article = () => {
    const bookTitleCon = ArticleStyle.bookTitleCon
    const subBookTitleCon = ArticleStyle.subBookTitleCon
  return (
    <article>
        <div className={bookTitleCon}>
            <div className={subBookTitleCon}>
            <img src='/assets/book-title.png' alt='Book Title'/>
            </div>
        </div>
    </article>
  )
}

export default Article