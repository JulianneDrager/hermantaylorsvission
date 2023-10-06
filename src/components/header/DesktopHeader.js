import React from 'react'
import HeaderStyle from "./Header.module.css";

const DesktopHeader = () => {
    const headContainer = HeaderStyle.headContainer
    const headerImageContainer = HeaderStyle.headerImageContainer
    const bottmBackground = HeaderStyle.bottmBackground
    const headSection1 = HeaderStyle.headSection1
    return (
    <header className={headContainer}>
        <div className={headSection1}>
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
            <img src='/assets/header-bottom-corner.png' alt='Herman Taylor' className={bottmBackground}/>
        </div>
    </header>
  )
}

export default DesktopHeader