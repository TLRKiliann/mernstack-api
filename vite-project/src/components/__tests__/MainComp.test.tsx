import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import MainComp from "../MainComp.tsx";

test('MainComp get by text', () => {
  render(<MainComp />);
  const linkElement = screen.getByText(/all members/i);
  expect(linkElement).toBeInTheDocument();
})

test('MatchSnapShot test MainComp', () => {
  const treeMainComp = create(<MainComp />)
  expect(treeMainComp.toJSON()).toMatchSnapshot()
})