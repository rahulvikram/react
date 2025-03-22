import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

// component imports
import { InfoCard } from './components/InfoCard'

// material ui imports
import { Button, ButtonGroup } from '@mui/material'


// formats the date to be displayed as a string
function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

// defines a react component of name App
export default function App() {
  const [count, setCount] = useState("Append to me! ")

  // defines an array of project titles and contents for dynamic rendering
  const projectTitles = ["RunMetrics Visualizer", "Beaver Board"]
  const projectContents = ["A handy developer tool for storing function runtime data and graphing it via GUI!", "An app where student users can keep track of their upcoming assignments, projects and exams"]
  const projectUrls = ["https://github.com/rahulvikram/RunMetrics-Visualizer", "https://github.com/rahulvikram/beaver-board"]

  return (
    <>
      <h1>Happy {formatDate(new Date())}</h1>
      <button onClick={() => setCount(count + "Appended! ")}>Click me</button>
      <p>Count: {count}</p>

      <h3>My Work</h3>
      <div className="projects">
        {/* map over projectTitles and projectContents to create a new InfoCard for each */}
        {/* passing props to the InfoCard component */}
        {/* note: generating key with index is bad practice, but its simple */}
        {projectTitles.map((title, index) => (
          <InfoCard key={index} title={title} content={projectContents[index]} url={projectUrls[index]} />
        ))}
      </div>
    </>
  )
}