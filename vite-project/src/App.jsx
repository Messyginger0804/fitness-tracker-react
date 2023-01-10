import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Register } from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Register />
    </div>
  )
}

export default App
