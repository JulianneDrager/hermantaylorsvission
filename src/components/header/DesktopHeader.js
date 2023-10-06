import React from 'react'
import HeaderStyle from "./Header.module.css";

const DesktopHeader = () => {
    const headContainer = HeaderStyle.headContainer
    const headerImageContainer = HeaderStyle.headerImageContainer
    const headerImage = HeaderStyle.headerImage
    const bottmBackground = HeaderStyle.bottmBackground
    const headSection1 = HeaderStyle.headSection1
    const headerTitleContainer = HeaderStyle.headerTitleContainer
    const headerTitle = HeaderStyle.headerTitle
    return (
    <header className={headContainer}>
        <div className={headSection1}>
            {/* <h1>Herman Taylor</h1> */}
            <div className={headerTitleContainer}>
                <img className={headerTitle} src='/assets/header-title.png' alt='Header Title'/>
            </div>
            <div>
            <h2>Author and Public Speaker</h2>
            <button>Book now</button>
            </div>
            <div>
               <a href=''><img src='assets/facebook-icon.png' alt='Facebook Icon'/></a>
               <a href=''><img src='/assets/instagram-icon.png' alt='Instagram Icon'/></a>
            </div>
        </div>
        <div className={headerImageContainer} >
            <img src='/assets/herman-header-image.jpg' alt='Herman Taylor' className={headerImage}/>
            <img src='/assets/header-bottom-corner.png' alt='Herman Taylor' className={bottmBackground}/>
        </div>
    </header>
  )
}

export default DesktopHeader