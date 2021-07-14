import React from 'react'

export default function ClashingColors({headerText, subheaderText, children}) {
    return (
        <div className="clashing_colors">
            <div className="headers_container">
                <div className="headers_text">
                    <h1 dir="rtl" lang="ar">{headerText}</h1>
                    <h2  dir="rtl" lang="ar">{subheaderText}</h2>
                </div>
            </div>

            {children}
        </div>
    )
}