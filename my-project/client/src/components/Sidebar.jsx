import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='flex flex-col items-start p-4 bg-gray-200 h-full w-50 space-y-2'>
      <Link to="/Home">Home</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/HabitsTracker">Habits Tracker</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Login">Login</Link>
      <Link to="/SignUp">Sign Up</Link>
      <Link to="/Settings">Settings</Link>
    </div>
  )
}

export default Sidebar;
