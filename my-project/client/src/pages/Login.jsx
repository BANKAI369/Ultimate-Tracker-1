import React from 'react'
import { fakeAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const res = fakeAuth.login(email, password)
    if (res.success) {
      navigate('/dashboard')
    } else {
      setError(res.message)
    }
  };

  return (
    <div className='bg-green-100 min-h-screen min-w-screen flex flex-col items-center justify-center mb-4'>
      <p className='flex justify-center items-center'>Login Page</p>
      <form className='bg-white p-6 rounded shadow-md' onSubmit={handleLogin}>
        <div className='mb-4'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            name='email'
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div className='text-red-500 mb-2'>{error}</div>}
        <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>Login</button>
      </form>
    </div>
  )
}
