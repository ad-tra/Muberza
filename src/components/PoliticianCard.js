import React from 'react';

import {Link} from 'gatsby';
import { GatsbyImage} from 'gatsby-plugin-image';



export default function PoliticianCard({politician}){
    const briefviewershipStats = politician.viewershipStats == null ? [] : Object.values(politician.viewershipStats.brief)

    return(
        <section className= {`politician_card_container pc--${politician.party}`} >
            <div className = "politician_card">
                    
                <div className="politician_image">
                    <GatsbyImage image={politician.thumbImage.childrenImageSharp[0].gatsbyImageData} alt={"picture of" + politician.name}/>
                    <div className= "degrade" aria-hidden= {true} ></div>
                </div>
                
                
                <div className="politician_info">
                    <h3>{politician.name}</h3>
                    <p>{politician.briefDiscrp}</p>
                    
                    <ul>
                         
                        {briefviewershipStats.map((statObj) =>{
                            return (
                                <li>
                                    <span>ar9am wa 7ikam: </span>
                                    <span>{statObj}</span>
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>
            
            <Link to={`politicians/${politician.slug}`} className="button_butt">شــوف أكثر  معلــومـات</Link>
            <div className="degrade degrade--smoll" aria-hidden= "true"></div>
            </div>
        </section>
    )
}