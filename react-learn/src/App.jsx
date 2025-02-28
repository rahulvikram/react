import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { InfoCard } from './components/InfoCard'

// defines a react component of name App
export default function App() {
  const [count, setCount] = useState("Append to me! ")

  return (
    <>
      <h1>Hello World</h1>
      <img src={reactLogo} alt="React Logo" />
      <button onClick={() => setCount(count + "Appended! ")}>Click me</button>
      <p>Count: {count}</p>

      <h3>My Work</h3>
      <div className="projects">
        <InfoCard title="RunMetrics Visualizer" content="A handy developer tool for storing function runtime data and graphing it via GUI!" />
        <InfoCard title="Beaver Board" content="An app where student users can keep track of their upcoming assignments, projects and exams" />
      </div>
    </>
  )
}