import React from "react";
import { fireEvent, screen, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { expect, vi, test } from 'vitest'
import { Link, MemoryRouter, useNavigate } from 'react-router-dom'
import Login from "../Login.tsx";
import handleInputChange from '../Login'
import generateId from '../Login'
import Home from '../Home'
import Subscribe from "../Subscribe"
import { PropsWithChildren } from 'react'

//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';

test("Login context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Login state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test("Login hook testing", () => {
  const mockedNavigate = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useNavigate: () => ({mockedNavigate: "room"})
  }))

  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => ({mockedAuth})
  }))
})

test('MatchSnapShot test Subscribe Login', () => {
  const tree = create(<Subscribe />)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('Login handleInputChange to be defined', () => {
  const funcDelete = handleInputChange
  expect(funcDelete).toBeDefined()
})

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

test('Login handleInputChange return id', () => {
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
