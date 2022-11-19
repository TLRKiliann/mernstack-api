import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ChatUser from './components/ChatUser'
import ChatComputer from './components/ChatComputer'
import ComputerRoom from './components/ComputerRoom'
import ErrorPageNotFound from './pages/PageNotFound'
import './App.scss'


const App:React.FC = () => {
  return(
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        } />
        <Route exact path='/contact' element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        } />
        <Route exact path='/chatuser/:firstName' element={
          <PrivateRoute>
            <ChatUser />
          </PrivateRoute>
        } />
        <Route exact path='/chatcomputer/:id' element={
          <PrivateRoute>
            <ChatComputer />
          </PrivateRoute>
        } />
        <Route exact path='/chatcomputer/:id/computerroom/:title' element={
          <PrivateRoute>
            <ComputerRoom />
          </PrivateRoute>
        } />
        <Route path='*' element={<ErrorPageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
