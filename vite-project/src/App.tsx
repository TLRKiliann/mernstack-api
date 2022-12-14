import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Subscribe from './pages/Subscribe'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Online from './pages/Online'
import Help from './pages/Help'
import ChatComputer from './components/ChatComputer'
import ComputerRoom from './components/ComputerRoom'
import PrivateMessage from './components/privatechat/PrivateMessage'
import ErrorPageNotFound from './pages/PageNotFound'
import './App.scss'


const App:React.FC = () => {
  return(
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/subscribe' element={<Subscribe />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route exact path='/online' element={
          //<PrivateRoute>
            <Online />
          //</PrivateRoute>
        } />
        <Route exact path='/help' element={
          <PrivateRoute>
            <Help />
          </PrivateRoute>
        } />
        <Route exact path='/chatcomputer/:id' element={
          //<PrivateRoute>
            <ChatComputer />
          //</PrivateRoute>
        } />
        <Route path='/computerroom/:link' element={
          //<PrivateRoute>
            <ComputerRoom />
          //</PrivateRoute>
        } />

        <Route path='/computerroom/privatemessage' element={
          //<PrivateRoute>
            <PrivateMessage />
          //</PrivateRoute>
        } />

        <Route path='*' element={<ErrorPageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
