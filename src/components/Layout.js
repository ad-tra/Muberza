import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <Navbar />
            {props.children}
            <footer>Shot myself in the footer</footer>

        </div>
    )
}
