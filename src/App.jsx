import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bookstall from './Home/AboutUs'
import FurnitureShowroom from './Home/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <FurnitureShowroom/>
    </>
  )
}

export default App;
