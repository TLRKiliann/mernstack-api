import React from "react";
import { screen, render } from '@testing-library/react';
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import DisplayInvitationOtherUsr from "../DisplayInvitationOtherUsr.tsx";

test('DisplayInvitationOtherUsrmy is present', () => {
  render(<DisplayInvitationOtherUsr />);
  const displayOthertestid = screen.getByTestId("displayOthertestid");
  expect(displayOthertestid).toBeInTheDocument();
})

test('MatchSnapShot test DisplayInvitationOtherUsr', () => {
  const treeDisplayInvitationOtherUsr = create(<DisplayInvitationOtherUsr />)
  expect(treeDisplayInvitationOtherUsr.toJSON()).toMatchSnapshot()
})