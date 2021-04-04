import React from 'react'
import { Link } from 'gatsby'
export default function BtnSwipUp(props) {
    return (
        <div className="clashing_colors_cta">
            <Link to="#">{props.hrefText}</Link>
            <div className="degrade" aria-hidden="true"></div>
            <div className="degrade" aria-hidden="true"></div>
            <div className="degrade" aria-hidden="true"></div>
        </div>
    )
}
