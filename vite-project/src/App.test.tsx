import React from "react";
import { screen } from '@testing-library/react';
import { expect, vi } from 'vitest'
import App from "./App.tsx";

//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';
//import {create} from 'react-test-renderer';


test('full app rendering/navigating', async () => {
  const {user} = renderWithRouter(<App />)
  expect(screen.getByText(/Home/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Services/i))

  expect(screen.getByText(/Help/i)).toBeInTheDocument()
})

test('landing on a bad page', () => {
  renderWithRouter(<App />, {route: '/something-that-does-not-match'})

  expect(screen.getByText(/no match/i)).toBeInTheDocument()
})

/*
test('rendering a component that uses useLocation', () => {
  const route = '/some-route'
  renderWithRouter(<LocationDisplay />, {route})

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})
*/