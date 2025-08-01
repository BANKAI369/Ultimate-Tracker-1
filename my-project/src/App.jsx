import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import PrivateRoute from './components/PrivateRoute'


// Import your page components here
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Settings from './pages/Settings'
import HabitsTracker from './pages/HabitsTracker'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  const [count, setCount] = useState(0)


  return (
    <ThemeProvider> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='home' element={<Home />} />
            <Route path='HabitsTracker' element={<HabitsTracker />} />
            <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path='about' element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path='contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
            <Route path='settings' element={<PrivateRoute><Settings /></PrivateRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App 
