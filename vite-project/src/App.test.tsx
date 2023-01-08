import React from 'react'
import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { MemoryRouter, Link, Router } from 'react-router-dom'
import { create } from "react-test-renderer"
import "@testing-library/jest-dom"
import App from './App'
import Home from './App'
import Subscribe from './App'
import AppLayout from './App'
import Profile from './App'
import Login from './App'
import ChatComputer from './App'
import ComputerRoom from './App'
import PrivateMessage from './App'
import PageNotFound from './App'
//import userEvent from '@testing-library/user-event'
//import { act } from 'react-dom/test-utils'

test('MatchSnapShot test App', () => {
  const treeApp = create(
    <MemoryRouter>
      <App />
    </MemoryRouter>)
  expect(treeApp.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Layout', () => {
  const treeLayout = create(
    <MemoryRouter>
      <AppLayout />
    </MemoryRouter>)
  expect(treeLayout.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Home', () => {
  const treeHome = create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>)
  expect(treeHome.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Subscribe', () => {
  const treeSub = create(
    <MemoryRouter>
      <Subscribe />
    </MemoryRouter>)
  expect(treeSub.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Profile', () => {
  const treeProfile = create(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>)
  expect(treeProfile.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test ChatComputer', () => {
  const treeChatComputer = create(
    <MemoryRouter>
      <ChatComputer />
    </MemoryRouter>)
  expect(treeChatComputer.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test ComputerRoom', () => {
  const treeComputerRoom = create(
    <MemoryRouter>
      <ComputerRoom />
    </MemoryRouter>)
  expect(treeComputerRoom.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test PrivateMessage', () => {
  const treePrivateMessage = create(
    <MemoryRouter>
      <PrivateMessage />
    </MemoryRouter>)
  expect(treePrivateMessage.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test PageNotFound', () => {
  const treePageNotFound = create(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>)
  expect(treePageNotFound.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Login', () => {
  const treeLogin = create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>)
  expect(treeLogin.toJSON()).toMatchSnapshot()
})
