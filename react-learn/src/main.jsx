import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// component imports for routing
import { AboutMe } from './components/AboutMe'
import { Navbar } from './components/Navbar'

// import Roboto font from Google Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
