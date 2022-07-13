import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Notify from './Notify'

function MainLayout({ children }) {
    return (
        <div>
            <Head>
                <link rel='icon' href='/image/logo1.png' />
            </Head>
            <Navbar />
            <Notify />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout