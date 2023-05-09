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