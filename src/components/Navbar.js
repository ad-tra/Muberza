import React from 'react';
import {Link} from 'gatsby';
import * as styles from '../styles/navbar.module.css'

export default function Navbar(){ 
    return (
        <nav className= { styles.nav }>
            <Link to= "#">Hi</Link>
            
            <ul>
                <li><Link to="#">test</Link></li>
                <li><Link to="#">test</Link></li>
                <li><Link to="#">test</Link></li>
            </ul>
        </nav>
    )
}