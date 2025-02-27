import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Page2 from './components/Page2'
import Service from './components/Service'
import Page4 from './components/Page4'
import Page5 from './components/Page5'

const App = () => {
  return (
    
      <div className=''>
        <Navbar/>
        <Home/>
        <Page2 />
        <Service />
        <Page4 />
        <Page5 />
      </div>
    
  )
}

export default App