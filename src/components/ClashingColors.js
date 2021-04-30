import React from 'react'

export default function ClashingColors({headerText, subheaderText, children}) {
    return (
        <div className="clashing_colors">
            <div className="headers_container">
                <div className="headers">
                    <h1 dir="rtl" lang="ar">{headerText}</h1>
                    <p  dir="rtl" lang="ar">{subheaderText}</p>
                </div>
            </div>

            {children}
        </div>
    )
}