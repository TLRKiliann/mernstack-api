import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom'
import ComputerRoom from "../ComputerRoom.tsx";
//import TerminalComponent from "../ComputerRoom.tsx";
//import UsersOnline from "../ComputerRoom.tsx";

test('my test for custom-element id', () => {
  render(<ComputerRoom />);
  const mytestid = screen.getByTestId("testdiv");
  expect(mytestid).toBeInTheDocument();
});

test('my test for terminal id', () => {
  render(<ComputerRoom />);
  const dataid_3 = screen.getByTestId("btn-terminal-comp");
  expect(dataid_3).toBeInTheDocument();
});

test('MatchSnapShot test ComputerRoom', () => {
  const tree = create(<ComputerRoom />)
  expect(tree.toJSON()).toMatchSnapshot();
});

/*
test('my test for handleaskusr id', () => {
  render(<ComputerRoom />);
  const dataid_2 = screen.getByTestId("span-useronline");
  expect(dataid_2).toBeInTheDocument();
});
*/

/*
test('MatchSnapShot test TerminalComponent', () => {
  const tree = create(<TerminalComponent />)
  expect(tree.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test UsersOnline', () => {
  const tree = create(<UsersOnline />)
  expect(tree.toJSON()).toMatchSnapshot();
})
*/