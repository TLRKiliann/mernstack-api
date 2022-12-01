//import {fireEvent, render, screen} from '@testing-library/react';
import { render, screen } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import App from './App.tsx'
import { Home } from './App.tsx'
//import { ErrorPageNotFound } from './App.tsx'


test('Click the services router Route Home', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText('Home')).toBeInTheDocument()
  
  const user = userEvent.setup()
  const home = vi.spyOn(user, 'click')
  const homeLink = screen.getByText(/home/i)

  await user.click(homeLink)
  expect(home).toHaveBeenCalledTimes(1)
});

it('Click the services router Route Services', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText('Services')).toBeInTheDocument()
  
  const user = userEvent.setup()
  const Services = vi.spyOn(user, 'click')
  const ServicesLink = screen.getByText(/services/i)

  await user.click(ServicesLink)
  expect(Services).toHaveBeenCalledTimes(1)
});

it('Click the services router Route Help', async () => {
  render(<App />, {wrapper: BrowserRouter})

  expect(screen.getByText('Help')).toBeInTheDocument()
  
  const user = userEvent.setup()
  const help = vi.spyOn(user, 'click')
  const helpLink = screen.getByText(/help/i)

  await user.click(helpLink)
  expect(help).toHaveBeenCalledTimes(1)
});


/*
TWEET
  import { describe, test, expect } from 'vitest'
  import { render, screen } from '@testing-library/react'
  import App from './App'

  describe('<App />', () => {
    test('App mounts properly', () => {
      const wrapper = render(<App />)
      expect(wrapper).toBeTruthy()

      // Get by h1
      const h1 = wrapper.container.querySelector('h1')
      expect(h1?.textContent).toBe('Vite + React')

      // Get by text using the React testing library
      const text = screen.getByText(
        /Click on the Vite and React logos to learn more/i
      );
      expect(text.textContent).toBeTruthy()
    })
  });


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