import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App
