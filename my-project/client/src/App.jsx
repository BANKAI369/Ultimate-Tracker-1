import { useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'


// Import your page components here
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Settings from './pages/Settings'
import HabitsTracker from './pages/HabitsTracker'
import Reminders from './pages/Reminders'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)


  return (
    <ThemeProvider> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Navigate to="/home" replace />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='home' element={<Home />} />
            <Route path='HabitsTracker' element={<HabitsTracker />} />
            <Route path='reminders' element={<Reminders />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
