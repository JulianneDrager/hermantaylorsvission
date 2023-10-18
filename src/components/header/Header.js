import React from "react";
import HeaderStyle from "./Header.module.css";
import Article from "./Article";
import Interview from "./Interview";

const DesktopHeader = () => {
  const headContainer = HeaderStyle.headContainer;
  const headerImageContainer = HeaderStyle.headerImageContainer;
  const headerImage = HeaderStyle.headerImage;
  const bottmBackground = HeaderStyle.bottmBackground;
  const headSection1 = HeaderStyle.headSection1;
  const headerTitleContainer = HeaderStyle.headerTitleContainer;
  const headerTitle = HeaderStyle.headerTitle;
  const headerContent = HeaderStyle.headerContent;
  const headerBtn = HeaderStyle.headerBtn;
  const headerBtnContainer = HeaderStyle.headerBtnContainer;
  const headerLinksCon = HeaderStyle.headerLinksCon;
  const contenth2 = HeaderStyle.contenth2;
  return (
    <header>
      <div className={headContainer}>
        <div className={headSection1}>
          <div className={headerTitleContainer}>
            <img
              className={headerTitle}
              // note on the tutorial I skip to this section, remove the quotes and replace with {}
              src="/assets/header-title.png"
              alt="Header Title"
            />
          </div>
          {/* <div className={headerContent}>
            <h2 className={contenth2}>
              AUTHOR & <br /> PUBLIC SPEAKER
            </h2>
          <div className={headerBtnContainer}>
            <button className={headerBtn}>BOOK NOW</button>
          </div>
          <div className={headerLinksCon}>
            <a href="">
              <img src="assets/facebook-icon.png" alt="Facebook Icon" />
            </a>
            <a href="">
              <img src="/assets/instagram-icon.png" alt="Instagram Icon" />
            </a>
          </div>
        </div> */}
      </div>
      {/* <div className={headerImageContainer}>
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
      </div> */}
      </div>
      {/* <Article />
      <Interview /> */}
    </header>
  );
};

export default DesktopHeader;
