import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import DisplayInvitationOtherUsr from "../DisplayInvitationOtherUsr.tsx";

test('my test for custom-element id', () => {
  render(<DisplayInvitationOtherUsr />);
  const displayOthertestid = screen.getByTestId("displayOthertestid");
  expect(displayOthertestid).toBeInTheDocument();
})

test('MatchSnapShot test DisplayInvitationOtherUsr', () => {
  const treeDisplayInvitationOtherUsr = create(<DisplayInvitationOtherUsr />)
  expect(treeDisplayInvitationOtherUsr.toJSON()).toMatchSnapshot()
})