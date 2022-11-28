// app.test.js
import {render, screen} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import React from 'react'
//import '@testing-library/jest-dom'
import {Home} from './App.tsx'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('full app rendering/navigating', async () => {
  render(<Home />, {wrapper: BrowserRouter})
  //const user = userEvent.setup()

  // verify page content for default route
  expect(screen.getByText(/home/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  //await user.click(screen.getByText(/about/i))
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const route = '/home'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[route]}>
      <Home />
    </MemoryRouter>,
  )

  // verify location display is rendered
  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})


/*
import React from "react";
import { screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { expect, vi } from 'vitest'
import App from "./App.tsx";


import { render } from '@testing-library/react';
import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe,
  expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
*/