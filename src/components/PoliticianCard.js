import React from 'react';

import {Link} from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';






export default function PoliticianCard({polisNode}){
    console.log();
    const image = getImage(polisNode.thumbImage)

    return(
        <div className= "politician_card_container">
            <div className="politician_image">
                <GatsbyImage 
                image={polisNode.thumbImage.childrenImageSharp[0].gatsbyImageData} 
                alt={"picture of" + polisNode.name}/>
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
        
        <Link to="#">See More...</Link>
        
        </div>
    )
}

