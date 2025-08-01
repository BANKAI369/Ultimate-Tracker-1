import React from 'react'
import { fakeAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    const res = fakeAuth.signup(email, password)
    if (res.success) {
      navigate('/dashboard')
    } else {
      setError(res.message)
    }
  }

  return (
    <div className='bg-blue-100 min-h-screen min-w-screen flex flex-col items-center justify-center mb-4'>
      <h2>Sign Up Page</h2>
      <form className='bg-white p-6 rounded shadow-md' onSubmit={handleSignUp}>
        <div className='mb-4 border-b-2 border-blue-500'>
          <label htmlFor="email">Email:</label><br/>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4 border-b-2 border-blue-500'>
          <label htmlFor="password">Password:</label><br/>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-4 border-b-2 border-blue-500'>
          <label htmlFor="confirm-password">Confirm Password:</label><br/>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <div className='text-red-500 mb-2'>{error}</div>}
        <button className='bg-blue-500 text-white py-2 px-4 rounded' type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
