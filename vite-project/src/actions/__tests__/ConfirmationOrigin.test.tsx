import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import ConfirmationOrigin from "../ConfirmationOrigin.tsx";

/*test('ConfirmationOrigin testid', () => {
  render(<ConfirmationOrigin />);
  const confirmOriginTest = screen.getByTestId("confirmOriginTest");
  expect(confirmOriginTest).toBeInTheDocument();
})

test('MatchSnapShot test ConfirmationOrigin', () => {
  const treeConfirmationOrigin = create(<ConfirmationOrigin />)
  expect(treeConfirmationOrigin.toJSON()).toMatchSnapshot()
})*/