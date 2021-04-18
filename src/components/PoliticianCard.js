import React from 'react';

import {Link} from 'gatsby';
import { GatsbyImage} from 'gatsby-plugin-image';


export default function PoliticianCard({polisNode}){

    return(
        <div className= {"politician_card_container "+ polisNode.party} >
            <div className = "politician_card">
                    
                <div className="politician_image">
                    <GatsbyImage image={polisNode.thumbImage.childrenImageSharp[0].gatsbyImageData} alt={"picture of" + polisNode.name}/>
                    <div className= "degrade" aria-hidden= {true} ></div>
                </div>
                
                
                <div className="politician_info">
                    <h3>{polisNode.name}</h3>
                    <p>{polisNode.briefDiscrp}</p>
                    
                    <ul>
                        {polisNode.briefStats.map((statObj) =>{
                            return (
                                <li>
                                    <span>{statObj.key}: </span>
                                    <span>{statObj.value}</span>
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>
            
            <Link to="#" className="butt">شــوف أكثر  معلــومـات</Link>
            <div className="degrade smoll" aria-hidden= "true"></div>
            </div>
        </div>
    )
}

