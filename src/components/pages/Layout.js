import React from 'react'


import { Outlet } from 'react-router-dom'
import NavHead from '../nav/NavHead'

const Layout = () => {
  return (
    <div>
        <NavHead/>
        <Outlet/>
    </div>
  )
}

export default Layout