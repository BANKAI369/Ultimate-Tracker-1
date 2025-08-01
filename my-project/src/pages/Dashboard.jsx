import React, { use } from 'react'
import { fakeAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Dashboard() {

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/user'); 
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    fakeAuth.logout(() => {
      navigate('/login');
    });
  };

  return(
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-2xl mb-4'>Welcome to the Dashboard!</h2>
      <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}
