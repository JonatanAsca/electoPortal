import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Login } from './componentes/Login'
import {Home} from './componentes/Home'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  return (
   <div className="App">
    {
     ! user.length > 0
     ? <Login setUser={setUser}/>
     : <Home user={user}/>
   }
     </div>
  
  )
}

export default App
