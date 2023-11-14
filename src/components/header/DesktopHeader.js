import React from "react";
import DesktopHeaderStyle from "./desktopHeader.module.css";
// import Article from "./Article";
// import Interview from "./Interview";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  const headContainer = DesktopHeaderStyle.headContainer;
  const headerImageContainer = DesktopHeaderStyle.headerImageContainer;
  const headerImage = DesktopHeaderStyle.headerImage;
  const bottmBackground = DesktopHeaderStyle.bottmBackground;
  const headSection1 = DesktopHeaderStyle.headSection1;
  const headerTitleContainer = DesktopHeaderStyle.headerTitleContainer;
  const headerTitle = DesktopHeaderStyle.headerTitle;
  const headerContent = DesktopHeaderStyle.headerContent;
  const headerBtn = DesktopHeaderStyle.headerBtn;
  const headerBtnContainer = DesktopHeaderStyle.headerBtnContainer;
  const headerLinksCon = DesktopHeaderStyle.headerLinksCon;
  const contenth2 = DesktopHeaderStyle.contenth2;
  const navDesktop = DesktopHeaderStyle.navDesktop
  const linkDesktop = DesktopHeaderStyle.linkDesktop
  const navListDesktop = DesktopHeaderStyle.navListDesktop
  return (
    <header>
      <nav className={navDesktop}>
              <ul className = {navListDesktop}>
                <li><Link className={linkDesktop} to="/">Home</Link></li>
                <li><Link className={linkDesktop} to="/interview">Interview</Link></li>
                <li><Link className={linkDesktop} to="/article">Article</Link></li>
                <li><Link className={linkDesktop} to="/contact">Contact</Link></li>
              </ul>
        </nav>
      <div className={headContainer}>
        <div className={headSection1}>
      
          <div className={headerTitleContainer}>
            <img
              className={headerTitle}
              src="/assets/header-title.png"
              alt="Header Title"
            />
          </div>
          <div className={headerContent}>
            <h2 className={contenth2}>
              AUTHOR & <br /> PUBLIC SPEAKER
            </h2>
            <div className={headerBtnContainer}>
              <button className={headerBtn}>BOOK NOW</button>
            </div>
            <div className={headerLinksCon}>
              <a href="/">
                <img src="assets/facebook-icon.png" alt="Facebook Icon" />
              </a>
              <a href="/">
                <img src="/assets/instagram-icon.png" alt="Instagram Icon" />
              </a>
            </div>
          </div>
        </div>
        <div className={headerImageContainer}>
          <img
            src="/assets/herman-header-image.jpg"
            alt="Herman Taylor"
            className={headerImage}
          />
          <img
            src="/assets/header-bottom-corner.png"
            alt="Herman Taylor"
            className={bottmBackground}
          />
        </div>
      </div>
      
      {/* <Interview /> */}
    </header>
  );
};

export default DesktopHeader;
