import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import MainTitle from "../MainTitle.tsx";

test('renders learn react link', () => {
  render(<MainTitle />);
  const linkElement = screen.getByText(/Chat-Society/i);
  expect(linkElement).toBeInTheDocument();
})

test('MatchSnapShot test MainTitle', () => {
  const treeMainTitle = create(<MainTitle />)
  expect(treeMainTitle.toJSON()).toMatchSnapshot()
})