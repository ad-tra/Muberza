import React from 'react'

export default function ClashingColors(props) {
    return (
        <div className="clashing_colors">
            {console.log(props)}
            <div className="clashing_colors_headers inverse_degrade">
                <h1 dir="rtl" lang="ar">{props.headerText}</h1>
                <p  dir="rtl" lang="ar">{props.subheaderText}</p>
            </div>

            {props.children}
        </div>
    )
}