import React from 'react'
import NavStyle from "./navbar.module.css"
import { Link } from 'react-router-dom'

const NavHead = () => {
    const navDesktop = NavStyle.navDesktop
  const linkDesktop = NavStyle.linkDesktop
  const navListDesktop = NavStyle.navListDesktop
  return (
    <div>
        <nav className={navDesktop}>
              <ul className = {navListDesktop}>
                <li><Link className={linkDesktop} to="/">Home</Link></li>
                <li><Link className={linkDesktop} to="/interview">Interview</Link></li>
                <li><Link className={linkDesktop} to="/article">Article</Link></li>
                <li><Link className={linkDesktop} to="/contact">Contact</Link></li>
              </ul>
        </nav>
    </div>
  )
}

export default NavHead