import React from 'react';
import {Link} from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { nanoid } from 'nanoid';

import {numFormatter} from './Utils'


export default function PoliticianCard({politician}){
    const briefViewershipStats = 
    [{label:"مجموع المشــاهدات ", value: politician.viewershipStats.brief.aggregateViews},
    {label:"معدل مشاهدة اللايـف", value: politician.viewershipStats.brief.viewsPerLive},
    {label:"عـدد اللايــفوات", value: politician.viewershipStats.full.length}]

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
                        {briefViewershipStats.map(brief =>(
                            <React.Fragment key = {nanoid()}>
                                <span>{brief.label}:</span>
                                <span className = "bold">{numFormatter(brief.value)}</span>
                            </React.Fragment>
        
                        ))}
                    </ul>
                    
                </div>
            
            <Link to={`politicians/${politician.slug}`} className="button_butt">شــوف أكثر  معلــومـات</Link>
            <div className="degrade degrade--smoll" aria-hidden= "true"></div>
            </div>
        </section>
    )
}