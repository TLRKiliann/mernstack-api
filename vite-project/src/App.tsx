import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Subscribe from './pages/Subscribe'
import Home from './pages/Home'
import Services from './pages/Services'
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
        <Route exact path='/services' element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        } />
        <Route exact path='/help' element={
          <PrivateRoute>
            <Help />
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

export default App

/*
  return(
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/subscribe' element={<Subscribe />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/services' element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        } />
        <Route exact path='/help' element={
          <PrivateRoute>
            <Help />
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

Je ne pense pas garder ça...
        <Route exact path='/chatuser/:firstName' element={
            <ChatUser />
        } />

*/