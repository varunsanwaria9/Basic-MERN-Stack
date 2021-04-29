import React from 'react'
import './CSS/InvalidPage.css'

function InvalidPage() {
    return (
        <div className="error-page">
            <h4>OOPS</h4>
            <p>404-PAGE CAN'T BE FOUND</p>
            <span>The page you requested for does not exist or has been removed.</span>
        </div>
    )
}

export default InvalidPage
