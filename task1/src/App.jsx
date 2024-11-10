import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Popular from './components/Popular.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div className="md:w-2/3">
        <Header />
        <Hero />
        <Popular />
      </div>
    </div>
    </>
  )
}

export default App
