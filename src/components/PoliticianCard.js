import React from 'react';
import {Link} from 'gatsby';
import { GatsbyImage} from 'gatsby-plugin-image';

import {numFormatter} from './Utils'

export default function PoliticianCard({politician}){
    const briefViewershipStats = 
    [{key:"مجموع المشاهدات ", value: politician.viewershipStats.brief.aggregateViews},
    {key:"معدل مشاهدة اللايف", value: politician.viewershipStats.brief.viewsPerLive},
    {key:"عدد اللايفوات", value: politician.viewershipStats.full.length}]

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
                    
                    <ul dir = "rtl">
                        {briefViewershipStats.map((brief, i) =>{
                            {console.log(brief)}
                            return (
                                <li>
                                    <span>{brief.key}:</span>
                                    <span>{numFormatter(brief.value)}</span>
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