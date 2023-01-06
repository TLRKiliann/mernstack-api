import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import DisplayInviteOrigin from "../DisplayInviteOrigin.tsx";

test('MatchSnapShot test DisplayInviteOrigin', () => {
  const treeDisplayInviteOrigin = create(<DisplayInviteOrigin />)
  expect(treeDisplayInviteOrigin.toJSON()).toMatchSnapshot()
}) 
