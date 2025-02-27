import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function InfoCard() {
  return (
    <div className="info-card">
      <h4>Info Card</h4>
      <p>This is an info card</p>
    </div>
  )
}


// defines a react component of name App
function App() {
  const [count, setCount] = useState("Append to me! ")

  return (
    <>
      <h1>Hello World</h1>
      <img src={reactLogo} alt="React Logo" />
      <button onClick={() => setCount(count + "Appended! ")}>Click me</button>
      <p>Count: {count}</p>
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </>
  )
}

export default App
