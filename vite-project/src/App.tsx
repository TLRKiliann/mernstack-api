import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Contact from './pages/Contact'
import ChatUser from './components/ChatUser'
import ErrorPageNotFound from './pages/PageNotFound'
import './App.scss'

const App:React.FC<{}> = () => {
  return(
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/chat' element={<Chat />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path="/chatuser/:id" element={<ChatUser />} />
        <Route path='*' element={<ErrorPageNotFound />} />
      </Routes>
    </div>
  )
}

export default App