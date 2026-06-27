import { useState } from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import { router } from './routes/routes'
import { RouterProvider } from 'react-router'

function App() {

  return (
    <div className=' leading-relaxed'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
