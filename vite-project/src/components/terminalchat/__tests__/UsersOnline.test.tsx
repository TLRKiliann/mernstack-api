import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import UsersOnline from "../UsersOnline.tsx";

test('my test for custom-element id', () => {
  render(<UsersOnline />);
  const mytestid = screen.getByTestId("onlinetest");
  expect(mytestid).toBeInTheDocument();
})