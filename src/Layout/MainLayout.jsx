import React from 'react'
import Navbar from './Navbar'
import FooterPage from './FooterPage'

function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <FooterPage />
        </>
    )
}

export default MainLayout