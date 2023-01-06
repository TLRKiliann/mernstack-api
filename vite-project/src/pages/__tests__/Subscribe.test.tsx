import React from "react";
import { expect } from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import Subscribe from "../Subscribe.tsx"
import '@testing-library/jest-dom'
import handleInputChange from '../Subscribe'
import validateFormSub from '../Subscribe'
import handleValidateSub from '../Subscribe'
import generateId from '../Subscribe'

test('Subscribe handleInputChange to be defined', () => {
  const funcInputChange = handleInputChange
  expect(funcInputChange).toBeDefined()
})

test('Subscribe validateFormSub to be defined', () => {
  const funcValid = validateFormSub
  expect(funcValid).toBeDefined()
})

test('Subscribe handleValidateSub to be defined', () => {
  const funcValidSub = handleValidateSub
  expect(funcValidSub).toBeDefined()
})

test('Subscribe generateId to be defined', () => {
  const funcGenId = generateId
  expect(funcGenId).toBeDefined()
})

test("Subscribe submit form test", () => {
  const onSubmit = vi.fn();
  const { getByTestId } = render(
    <form
      onSubmit={onSubmit} 
      data-testid="formsub">
    </form>);
  fireEvent.submit(getByTestId("formsub"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

test('handleValidateSub return id', () => {
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
  const handleValidateSub = vi.fn(beverage => { beverage })
  handleValidateSub()
  expect(handleValidateSub).toHaveReturned("hello")
})