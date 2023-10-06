import React from 'react'
// import HeaderStyle from "./Header.module.css";

const DesktopHeader = () => {
  return (
    <header>
        <div>
            <h1>Herman Taylor</h1>
            <h2>Author and Public Speaker</h2>
            <button>Book now</button>
            <div>
               <img src='../assets/facebook-icon.png' alt='Facebook Icon'/>
               <img src='../assets/instagram-icon.png' alt='Instagram Icon'/>
            </div>
            <div>
                <img src='../assets/herman-header-image.jpg' alt='Herman Taylor'/>
            </div>
        </div>
    </header>
  )
}

export default DesktopHeader