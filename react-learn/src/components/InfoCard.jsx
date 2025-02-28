import React, { useState } from 'react'
import '../App.css'

// InfoCard is a parameterised component so we can dynamically pass in different values for title and content
export function InfoCard({ title, content }) {
    return (
        <div className="info-card">
        <h4>{title}</h4>
        <p>{content}</p>
        </div>
    )
}

