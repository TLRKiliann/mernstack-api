import React from "react";
import { screen, render } from '@testing-library/react';
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import AskMessageBox from "../AskMessageBox.tsx";

/*
test('AskMessageBoxmy test present', () => {
  render(<AskMessageBox />);
  const asktestid = screen.getByTestId("asktestid");
  expect(asktestid).toBeInTheDocument();
})
*/

test('MatchSnapShot test toMatchSnapshot', () => {
  const treeAskMessageBox = create(<AskMessageBox />)
  expect(treeAskMessageBox.toJSON()).toMatchSnapshot()
})
