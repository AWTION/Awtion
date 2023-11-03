import { useState } from 'react'
import LogInPage from './pages/LogInPage/LogInPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogInPage />
    </>
  )
}

export default App
