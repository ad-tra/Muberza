import React from 'react';
import {Link} from 'gatsby';
import * as styles from '../styles/global.scss'
import Logo from "../../data/svg/logo.svg"

export default function Navbar(){ 
    return (
        <nav className= "navbar">
            
            
            <Link className= "navbar_logo" to= "/"> <Logo /> </Link>
            
            <ul className = "navbar_links">
                <li ><Link to="/404">شكـونـا</Link></li>
                <li ><Link to="/404">اتصل بنا</Link></li>
                <li ><Link to="/404">اعطينا رايك</Link></li>
            </ul>
        </nav>
    )
}