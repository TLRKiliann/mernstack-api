import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import Footer from "../Footer.tsx";

test('Footer get by text', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});

test('MatchSnapShot test Footer', () => {
  const treeFooter = create(<Footer />)
  expect(treeFooter.toJSON()).toMatchSnapshot()
})