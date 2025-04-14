import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <>
      <Header/>
    <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
