import React, { useState } from 'react'
import '../App.css'

// InfoCard is a parameterised component so we can dynamically pass in different values for title and content
// title and content are props passed in from the parent component
export function InfoCard({ title, content, url }) {
    return (
        <a href={url} className="info-card-link" target="_blank" rel="noopener noreferrer">
            <div className="info-card hover-animation">
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </a>
    )
}

