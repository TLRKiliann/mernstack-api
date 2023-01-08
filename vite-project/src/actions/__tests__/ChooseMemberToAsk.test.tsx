import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import ChooseMemberToAsk from "../ChooseMemberToAsk.tsx";

test("ChooseMember MatchSnapShot", () => {
  const treeUsrChooseMemb = create(
    <ChooseMemberToAsk />
  )
  expect(treeUsrChooseMemb.toJSON()).toMatchSnapshot()
})

test('ChooseMemberToAsk by testid', () => {
  render(<ChooseMemberToAsk />);
  const mytestid = screen.getByTestId("chooseMemberId");
  expect(mytestid).toBeInTheDocument();
})