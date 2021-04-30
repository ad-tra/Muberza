import React from 'react'
import { Link } from 'gatsby'
export default function BtnSwipUp({href, hrefText}) {
    return (
        <div className="clashing_colors_cta">
            <Link to={href}>{hrefText}</Link>
            <div className="degrade" aria-hidden="true"></div>
            <div className="degrade" aria-hidden="true"></div>
            <div className="degrade" aria-hidden="true"></div>
        </div>
    )
}
