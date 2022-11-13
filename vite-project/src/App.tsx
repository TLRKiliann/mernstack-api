import React from 'react'
import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import Contact from './Pages/Contact'
import ChatUser from './components/ChatUser'
import './App.scss'

const App:React.FC<{}> = () => {
  return(
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/chatuser/:id" element={<ChatUser />} />
      </Routes>
    </div>
  )
}

export default App