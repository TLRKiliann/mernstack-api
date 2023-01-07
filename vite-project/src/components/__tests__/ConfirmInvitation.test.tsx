import React from "react";
import { screen, render } from '@testing-library/react';
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import ConfirmInvitation from "../ConfirmInvitation.tsx";



test('my test for custom-element id', () => {
  render(<ConfirmInvitation />);
  const confirmtestid = screen.getByTestId("confirmtestid");
  expect(confirmtestid).toBeInTheDocument();
})

test('MatchSnapShot test ConfirmInvitation', () => {
  const treeConfirmInvitation = create(<ConfirmInvitation />)
  expect(treeConfirmInvitation.toJSON()).toMatchSnapshot()
})