import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import VoletLeft from "../VoletLeft.tsx";
import { handleSearchUser } from '../VoletLeft.tsx'

test('MatchSnapShot test ComputerRoom', () => {
  const tree = create(<VoletLeft />)
  expect(tree.toJSON()).toMatchSnapshot();
});

test("function handleSearchUser testing", () => {
  const beverage = "Emrick"
  const handleSearchUser = vi.fn(todo => todo)
  handleSearchUser(beverage)
  render(
    <button
      data-testid="btn-testvoletleft"
      onClick={handleSearchUser}>
      Enter
    </button>
  )
  fireEvent.click(screen.getByTestId("btn-testvoletleft"))
  expect(handleSearchUser).toHaveReturnedWith("Emrick")
  expect(handleSearchUser).toHaveBeenCalledTimes(2)
});