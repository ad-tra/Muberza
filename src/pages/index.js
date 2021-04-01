import React from "react"
import NavBar from "../components/Navbar.js"
import PoliticianCard from "../components/PoliticianCard.js"
import style from "../styles/global.css"
import {Link} from "gatsby"

export default function Home() {
    return (
        <div>
            <div className="hero_container">
                <NavBar />
                
                <div className="hero_header">
                    <h1 dir="rtl" lang="ar">مــــــبـــا ر ز ة </h1>
                    
                    <p dir="rtl" lang="ar">عبير كونتر سـيــف. إتلاف كونتر كرامة هي مبارزة يـتفرجو فيها مـلاين توانسا على Facebook Lives. زعما شكون ر ابـح الطرح؟ شكون عندو نسب مشاهدة أعلـى؟ تزحلق اللوطة و اتعرف على الأرقام.</p>   
                </div>
                
                <div className="hero_cta">
                    <Link to = "#">تـزحلق اللوطة</Link>
                </div>
            
            <h2 dir="rtl" lang="ar">50مليون</h2>
            
            </div>

            <PoliticianCard />
        </div>   

    )
}
