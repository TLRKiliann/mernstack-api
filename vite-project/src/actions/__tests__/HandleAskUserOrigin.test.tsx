import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import HandleAskUserOrigin from "../HandleAskUserOrigin.tsx";

test('MatchSnapShot test HandleAskUserOrigin', () => {
  const treeHandleAskUserOrigin = create(<HandleAskUserOrigin />)
  expect(treeHandleAskUserOrigin.toJSON()).toMatchSnapshot()
}) 
