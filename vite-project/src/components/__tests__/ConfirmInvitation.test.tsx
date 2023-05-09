import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom'
import ConfirmInvitation from "../ConfirmInvitation.tsx";

test('MatchSnapShot test ConfirmInvitation', () => {
  const tree = create(<ConfirmInvitation />)
  expect(tree.toJSON()).toMatchSnapshot();
});