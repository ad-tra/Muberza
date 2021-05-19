import React from 'react'
import Navbar from './Navbar'

export default function Layout({className, children}) {
    return (
        <div className= {className}>
            <Navbar className= {className} />
            {children}
            <footer>Shot myself in the footer</footer>

        </div>
    )
}
