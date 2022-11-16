import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Contact from './pages/Contact'
import ChatUser from './components/ChatUser'
import ErrorPageNotFound from './pages/PageNotFound'
import './App.scss'


const App:React.FC = () => {
  return(
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/chat' element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        } />
        <Route exact path='/contact' element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        } />
        <Route exact path='/chatuser/:id' element={
          <PrivateRoute>
            <ChatUser />
          </PrivateRoute>
        } />
        <Route path='*' element={<ErrorPageNotFound />} />
      </Routes>
    </div>
  )
}

export default App