import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

export default function PoliticianCard(){
    return(
        <div className= "politician_card_container">
            <div className="politician_image">
                <StaticImage src="../img/saif_head.png"  alt="A dinosaur" />
            </div>
            <div className="politician_info">
                <h3>سيف الدين مخلوف</h3>
                <p>لكن لا بــــد أن أوضح لك أن كل هذه الأفكار لمغلوطــة حول </p>
                <ul>
                    <li>
                        <span>الأللقحم منعي: </span>
                        <p> 50 مليون</p>
                    </li>
                    <li>
                        <span>الأللقحم منعي: </span>
                        <p> 50 مليون</p>
                    </li>
                    <li>
                        <span>الأللقحم منعي: </span>
                        <p> 50 مليون</p>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}