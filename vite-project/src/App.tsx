import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import PrivateRoute from './PrivateRoute'
import NavBar from './components/NavBar'
//import Login from './pages/Login'
import Home from './pages/Home'
import Services from './pages/Services'
import Help from './pages/Help'
import ChatUser from './components/ChatUser'
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
        <Route data-testid="location-display" exact path='/' element={<Home />} />
        <Route exact path='/services' element={
            <Services />
        } />
        <Route exact path='/help' element={
            <Help />
        } />
        <Route exact path='/chatuser/:firstName' element={
            <ChatUser />
        } />
        <Route exact path='/chatcomputer/:id' element={
            <ChatComputer />
        } />
        <Route path='/computerroom/:link' element={
            <ComputerRoom />
        } />

        <Route path='/computerroom/privatemessage/:firstName' element={
            <PrivateMessage />
        } />

        <Route path='*' element={<ErrorPageNotFound />} />
      </Routes>
    </div>
  )
}

export default App

/*
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
        <Route path='/computerroom/:link' element={
          <PrivateRoute>
            <ComputerRoom />
          </PrivateRoute>
        } />

        <Route path='/computerroom/privatemessage/:firstName' element={
          <PrivateRoute>
            <ComputerRoom />
          </PrivateRoute>
        } />

        <Route path='*' element={<ErrorPageNotFound />} />
      </Routes>
    </div>
  )
}
*/