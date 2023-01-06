import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import AskMessageBoxOrigin from "../AskMessageBoxOrigin.tsx";

test('MatchSnapShot test AskMessageBoxOrigin', () => {
  const treeAskMessageBoxOrigin = create(<AskMessageBoxOrigin />)
  expect(treeAskMessageBoxOrigin.toJSON()).toMatchSnapshot()
}) 
