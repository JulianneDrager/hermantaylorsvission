// Screen.jsx
import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Header from './header/Header';
import Contact from './contact/Contact';
import InterviewMobile from './interview/InterviewMobile';
import ArticleMobile from './header/ArticleMobile';

const Screen = () => {
  return (
    <div>
      <Header/>
      <InterviewMobile/>
      <ArticleMobile/>
      <Contact/>
    </div>
  );
}

export default Screen;
