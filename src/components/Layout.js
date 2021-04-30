import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            {children}
            <footer>Shot myself in the footer</footer>

        </div>
    )
}
