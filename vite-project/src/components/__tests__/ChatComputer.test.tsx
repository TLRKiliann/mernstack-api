import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import ChatComputer from "../ChatComputer.tsx";

test('my test for custom-element id', () => {
  render(<ChatComputer />);
  const mytestid = screen.getByTestId("chatctestid");
  expect(mytestid).toBeInTheDocument();
})