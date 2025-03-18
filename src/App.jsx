import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer/Footer'

import NavBar from './NavBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Footer/>
    <NavBar></NavBar>
    </div>
    </>
  )
}

export default App
