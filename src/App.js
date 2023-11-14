

import React from 'react'
import Screen from "./components/Screen"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/pages/Layout';
import Header from './components/header/Header';
import InterviewMobile from './components/interview/InterviewMobile';
import ArticleMobile from './components/header/ArticleMobile';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Screen />} />
          <Route path="home" element={<Header />} />
          <Route path="interview" element={<InterviewMobile />} />
          <Route path="article" element={<ArticleMobile />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App