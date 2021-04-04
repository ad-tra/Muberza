import React from 'react';

import {Link} from 'gatsby';
import { GatsbyImage} from 'gatsby-plugin-image';


export default function PoliticianCard({politician}){

    return(
        <section className= {"politician_card_container "+ politician.party} >
            <div className = "politician_card">
                    
                <div className="politician_image">
                    <GatsbyImage image={politician.thumbImage.childrenImageSharp[0].gatsbyImageData} alt={"picture of" + politician.name}/>
                    <div className= "degrade" aria-hidden= {true} ></div>
                </div>
                
                
                <div className="politician_info">
                    <h3>{politician.name}</h3>
                    <p>{politician.briefDiscrp}</p>
                    
                    <ul>
                        {politician.briefStats.map((statObj) =>{
                            return (
                                <li>
                                    <span>{statObj.key}: </span>
                                    <span>{statObj.value}</span>
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>
            
            <Link to={`/politicians/${politician.slug}`} className="butt">شــوف أكثر  معلــومـات</Link>
            <div className="degrade smoll" aria-hidden= "true"></div>
            </div>
        </section>
    )
}

