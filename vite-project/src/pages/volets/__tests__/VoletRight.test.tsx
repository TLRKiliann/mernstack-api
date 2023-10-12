<<<<<<< HEAD
import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from "react-test-renderer";
import '@testing-library/jest-dom'
import VoletRight from "../VoletRight.tsx";
import { handleVoletsRight } from "../VoletRight.tsx";

test('MatchSnapShot test ComputerRoom', () => {
  const tree = create(<VoletRight />)
  expect(tree.toJSON()).toMatchSnapshot();
});


describe("testing children VoletRight", () => {
  const Button = ({onClick, children}) => (
    <button onClick={onClick} data-testid="btn-testvoletright">
      {children}
    </button>
  )
  test('func handleVoletsRight test', () => {
    const beverage = 'rv'
    const handleVoletsRight = vi.fn(beverage => beverage)
    handleVoletsRight(beverage)
    render(
      <button 
        data-testid="btn-testvoletright" 
        onClick={handleVoletsRight}>
        X
      </button>
    )
    fireEvent.click(screen.getByTestId('btn-testvoletright'))
    expect(handleVoletsRight).toHaveReturnedWith('rv')
    expect(handleVoletsRight).toHaveBeenCalledTimes(2)
  });
});
=======
import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
//import VoletRight from "../VoletRight"
//import ChatComputer from "../VoletRight"

test("mocking VoletRight", () => {
  vi.mock('../VoletRight.tsx', () => ({
    VoletRight: vi.fn()
  }))
})

test("mocking ChatComputer", () => {
  vi.mock('../../components/ChatComputer.tsx', () => ({
    ChatComputer: vi.fn()
  }))
})

test('VoletR callMyLogo to be defined', () => {
  const callMyLogo = vi.fn()
  const funcLogo = callMyLogo
  expect(funcLogo).toBeDefined()
})

test('VoletR callMyLogo return id', () => {
  const callMyLogo = vi.fn()
  callMyLogo()
  expect(callMyLogo).toHaveBeenCalledTimes(1)
})
>>>>>>> master
