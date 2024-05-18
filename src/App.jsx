import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Login } from './componentes/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
      <Login/>
   </div>
  )
}

export default App
