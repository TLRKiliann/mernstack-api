//import {fireEvent, render, screen} from '@testing-library/react';
import { render, screen } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
//import {Link, Route, Routes, useLocation} from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './App.tsx'
//import PrivateRoute from './PrivateRoute'
//import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Home } from './App.tsx'
import { act } from 'react-dom/test-utils';
//import { ErrorPageNotFound } from './App.tsx'


test('Click the services router Route Home', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText(/Home/i)).toBeInTheDocument()
  
  const user = userEvent.setup()
  const home = vi.spyOn(user, 'click')
  const homeLink = screen.getByText(/home/i)

  await user.click(homeLink)
  expect(home).toHaveBeenCalledTimes(1)
});

test('Click the login router Route login', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText(/Login/i)).toBeInTheDocument()
  
  const user = userEvent.setup()
  const login = vi.spyOn(user, 'click')
  const loginLink = screen.getByText(/login/i)

  await user.click(loginLink)
  expect(login).toHaveBeenCalledTimes(1)
});