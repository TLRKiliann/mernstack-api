import React from 'react'
//import { BrowserRouter, useLocation, Link, useNavigate } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
//import { Route, MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import HandleAskUserOrigin from '../HandleAskUserOrigin'
//import UsersOnline from '../HandleAskUserOrigin'
import { handleAskUserPrivate } from '../HandleAskUserOrigin'


test('HandleAskUserOrigin testing', () => {
  const treeApp = create(
    <HandleAskUserOrigin />
  )
  expect(treeApp.toJSON()).toMatchSnapshot()
});

test('handleAskUserPrivate return yeah', () => {
  const beverage = { id: 2 };
  const handleAskUserPrivate = vi.fn(beverage => beverage.id)
  handleAskUserPrivate(beverage)
  const { getByTestId } = render(
    <HandleAskUserOrigin />
  );
  fireEvent.click(screen.getByTestId('span-useronline'))
  expect(handleAskUserPrivate).toHaveReturnedWith(2)
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
});
