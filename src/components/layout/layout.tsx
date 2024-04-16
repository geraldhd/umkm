import React from 'react'
import { SideBar } from '../(sidebar)/sidebar'
import Header from '../header'
import PageWrapper from '../pagewrapper'

type LayoutProps = {
    children: React.ReactNode;
  };
function Layout({children}:LayoutProps) {
  return (
    <div className='min-h-screen flex'>
        <SideBar></SideBar>
        <Header></Header>
        <PageWrapper>{children}</PageWrapper>
    </div>
  )
}

export default Layout
