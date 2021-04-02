import React from 'react';

import {graphql, Link, useStaticQuery} from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';






export default function PoliticianCard({polisNode}){
    console.log(polisNode);
    //const image = getImage(data.allFile.edges[0].node)

    return(
        <div className= "politician_card_container">
            <div className="politician_image">
                {/*<GatsbyImage 
                image={image}
                
                alt="A dinosaur" />*/}
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

