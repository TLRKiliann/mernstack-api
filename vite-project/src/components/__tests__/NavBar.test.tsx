import React from "react";
import { screen, render } from '@testing-library/react';
import { test, expect} from 'vitest'
//import '@testing-library/jest-dom'
import NavBar from "../NavBar.tsx";

test('renders learn react link', () => {
  render(<NavBar />);
  const linkElement = screen.getByTestId("testId");
  expect(linkElement).toBeInTheDocument();
});