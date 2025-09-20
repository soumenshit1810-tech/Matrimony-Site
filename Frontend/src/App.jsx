
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Search from './pages/Search'
import Plans from './pages/Plans'
import Successstories from './pages/Successstories'
import Contact from './pages/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/plans' element={<Plans/>} />
          <Route path='/successstories' element={<Successstories/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}/>
          
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App