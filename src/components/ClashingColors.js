import React from 'react'

export default function ClashingColors(props) {
    return (
        <div className="clashing_colors">
            <div className="headers_container">
                <div className="headers">
                    <h1 dir="rtl" lang="ar">{props.headerText}</h1>
                    <p  dir="rtl" lang="ar">{props.subheaderText}</p>
                </div>
            </div>

            {props.children}
        </div>
    )
}