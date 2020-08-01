import Header from './Header/Header'
import Footer from './Footer/Footer'
import React from 'react'

export default function Layout (props) {
    return (
        <div className="layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}