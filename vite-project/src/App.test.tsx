import React from 'react'
import { test, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import App from './App'
import Home from './App'
import Subscribe from './App'
import Profile from './App'
import Online from './App'
import Login from './App'
import ChatComputer from './App'
import ComputerRoom from './App'
import PrivateMessage from './App'
import PageNotFound from './App'
import NavBar from './components/NavBar'

test('MatchSnapShot test App', () => {
  const treeApp = create(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>)
  expect(treeApp.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Home', () => {
  const treeHome = create(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>)
  expect(treeHome.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Subscribe', () => {
  const treeSub = create(
    <MemoryRouter initialEntries={["/subscribe"]}>
      <Subscribe />
    </MemoryRouter>)
  expect(treeSub.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Profile', () => {
  const treeProfile = create(
    <MemoryRouter initialEntries={["/profile"]}>
      <Profile />
    </MemoryRouter>)
  expect(treeProfile.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test ChatComputer', () => {
  const treeChatComputer = create(
    <MemoryRouter initialEntries={['/chatcomputer/:id']}>
      <ChatComputer />
    </MemoryRouter>)
  expect(treeChatComputer.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test ComputerRoom', () => {
  const treeComputerRoom = create(
    <MemoryRouter initialEntries={['/computerroom/:link']}>
      <ComputerRoom />
    </MemoryRouter>)
  expect(treeComputerRoom.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test PrivateMessage', () => {
  const treePrivateMessage = create(
    <MemoryRouter initialEntries={['/computerroom/privatechat/:retrieveRoom']}>
      <PrivateMessage />
    </MemoryRouter>)
  expect(treePrivateMessage.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test PageNotFound', () => {
  const treePageNotFound = create(
    <MemoryRouter initialEntries={['*']}>
      <PageNotFound />
    </MemoryRouter>)
  expect(treePageNotFound.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Login', () => {
  const treeLogin = create(
    <MemoryRouter initialEntries={["/login"]}>
      <Login />
    </MemoryRouter>)
  expect(treeLogin.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Online', () => {
  const treeSub = create(
    <MemoryRouter initialEntries={["/online"]}>
      <Online />
    </MemoryRouter>
  )
  expect(treeSub.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test NavBar', () => {
  const treeApp = create(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(treeApp.toJSON()).toMatchSnapshot()
})