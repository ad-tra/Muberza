import React, {useState} from 'react';
import {Link} from 'gatsby';
import * as styles from '../styles/global.scss'
import Logo from "../../data/svg/logo.svg"

export default function Navbar(){ 
    const [state, setState] = useState(false)
    function handleHam(){
        setState(state => !state)
    }
    return (
        <nav className= "navbar">
            <div className = "navbar_controls">
                
                <button className = "burger" onClick={handleHam} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="143.7 162.1 139.9 92.8" width="30px" height="20px">
                        <path d="M144 232h140v23H144zM144 197h140v23H144zM144 162h140v23H144z"/>
                    </svg>
                </button>
                <Link className= "logo" to= "/"><Logo /> </Link>
                
            </div>

            
            <ul className={ "navbar_links ".concat(state ? "expanded" : "")}>
                <li ><Link to="/404">شكـونـا</Link></li>
                <li ><Link to="/404">اتصل بنا</Link></li>
                <li ><Link to="/404">اعطينا رايك</Link></li>
            </ul>
        </nav>
    )
}