import React from 'react'
export default function BtnSwipUp({href, hrefText, onClick}) {
    return (
        <div className="clashing_colors_cta">
            <a href={href} onClick= {onClick}>{hrefText}</a>
            <div className="degrade" aria-hidden="true"></div>
            <div className="degrade" aria-hidden="true"></div>
            <div className="degrade" aria-hidden="true"></div>
        </div>
    )
}
