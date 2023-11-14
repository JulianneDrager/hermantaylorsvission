import React from 'react'
import Header from "./header/Header"
import Contact from './contact/Contact'
import InterviewMobile from './interview/InterviewMobile'
import ArticleMobile from './header/ArticleMobile'
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'


const Screen = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Header/>} />
      <Route path="/interview" element={<InterviewMobile/>} />
      <Route path="/article" element={<ArticleMobile/>} />
      <Route path="/contact" element={<Contact/>} />
      </Route>
    </Routes>
    </BrowserRouter>
        // {/* <Header/>
        // <InterviewMobile/>
        // <ArticleMobile/>
        // <Contact/> */}
    
  )
}

export default Screen