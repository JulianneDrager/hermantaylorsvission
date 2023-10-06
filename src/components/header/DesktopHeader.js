import React from 'react'
import HeaderStyle from "./Header.module.css";

const DesktopHeader = () => {
    const headContainer = HeaderStyle.headContainer
    const headerImageContainer = HeaderStyle.headerImageContainer
  return (
    <header className={headContainer}>
        <div>
            <h1>Herman Taylor</h1>
            <h2>Author and Public Speaker</h2>
            <button>Book now</button>
            <div>
               <img src='assets/facebook-icon.png' alt='Facebook Icon'/>
               <img src='/assets/instagram-icon.png' alt='Instagram Icon'/>
            </div>
        </div>
        <div >
            <img src='/assets/herman-header-image.jpg' alt='Herman Taylor' className={headerImageContainer}/>
        </div>
    </header>
  )
}

export default DesktopHeader