import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Quality from './components/Quality'
import Article from './components/Article'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Quality/>
      <Article/>
      <Footer/>
    </>
  )
}

export default App
