import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-2/3">
        <Header />
        <Hero />
      </div>
    </div>
    </>
  )
}

export default App
