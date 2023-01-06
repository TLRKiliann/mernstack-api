import React from "react";
import { fireEvent, screen, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { expect, vi, test } from 'vitest'
import { Link, MemoryRouter } from 'react-router-dom'
import Login from "../Login.tsx";
import handleInputChange from '../Login'
import generateId from '../Login'
import Home from '../Home'
import { PropsWithChildren } from 'react'
//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';

function wrapper({children}: PropsWithChildren<unknown>) {
  return (
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
}

test("should have sign-up link", () => {
  setup()
  expect(screen.getByRole('link', {name: /subscribe/i})).toBeInTheDocument()
})

function setup() {
  render(<Home />, {wrapper})
}

test('handleInputChange to be defined', () => {
  const funcDelete = handleInputChange
  expect(funcDelete).toBeDefined()
})

/*
test("Login subscribe btn test", () => {
  const onClick = vi.fn();
  const { getByTestId } = render(
    <Link
      data-testid="linktestlogin"
      to="/subscribe"
    >
    </Link>
  )
  fireEvent.submit(getByTestId("linktestlogin"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
})
*/

test("Login submit form test", () => {
  const onSubmit = vi.fn();
  const { getByTestId } = render(
    <form
      onSubmit={onSubmit} 
      data-testid="formlog">
    </form>
  )
  fireEvent.submit(getByTestId("formlog"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
})

test('Login generateId to be defined', () => {
  const funcGenIdLog = generateId
  expect(funcGenIdLog).toBeDefined()
})

test('handleInputChange return id', () => {
  const beverage = {
    id: 1,
    img: "http://localhost:5173/src/assets/snapface/oliver.jpg",
    firstName: "tree",
    lastName: "leaf",
    age: 23,
    email: "mail@gtruc.com",
    location: "Valley",
    gender: "male",
    mainroom: "Cyber-Security",
    room: "Scapy",
    isConnected: false,
    signalRecieve: false,
    sentMsg: "hello",
    messagebox: "msg cool",
    returnConfirm: false
  }
  const handleInputChange = vi.fn(beverage => {beverage})
  handleInputChange()
  expect(handleInputChange).toHaveReturned(23)
})

/*
test('renders Login by text', () => {
  render(<Login />);
  const linkElement = screen.getByTestId("logintest");
  expect(linkElement).toBeInTheDocument();
})
*/

/*
describe('<Login />', () => {
  test('The input field and its props', () => {
    render(<Login />)
    const input = document.querySelector(
      'input'
    ) as HTMLInputElement | null;
    
    // input exists in the form component
    expect(input).toBeTruthy()
    
    // is empty
    expect(input?.textContent).toBe('')

    if (input) {
      // test the input text
      input.textContent = 'gaston'
      expect(input.textContent).toBe('gaston')

      // test the type prop
      expect(input.type).toBe('username')
      
      // test the name prop
      expect(input.name).toBe('username')

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: '1234567'
        }
      })
      expect(input.value).toBe('1234567')

      // test the required prop with the jest-dom
      expect(input).toBeRequired()
    }
  })
})
*/