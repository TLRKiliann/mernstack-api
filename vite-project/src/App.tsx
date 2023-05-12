import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Subscribe from './pages/Subscribe'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Online from './pages/Online'
import ChatComputer from './components/ChatComputer'
import ComputerRoom from './components/ComputerRoom'
import PrivateMessage from './components/privatechat/PrivateMessage'
import PageNotFound from './pages/PageNotFound'
import './App.scss'

const App: React.FC = () => {
  return(
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/subscribe' element={<Subscribe />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/profile' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path='/online' element={
          <PrivateRoute>
            <Online />
          </PrivateRoute>
        } />
        <Route path='/chatcomputer/:id' element={
          <PrivateRoute>
            <ChatComputer />
          </PrivateRoute>
        } />
        <Route path='/computerroom/:link' element={
          <PrivateRoute>
            <ComputerRoom />
          </PrivateRoute>
        } />
        <Route path='/computerroom/privatechat/:retrieveRoom' element={
          <PrivateRoute>
            <PrivateMessage />
          </PrivateRoute>
        } />
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App