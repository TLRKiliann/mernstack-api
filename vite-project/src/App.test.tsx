import React from "react";
import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import App from "./App.tsx";
import Header from "./App.tsx";

import MainTitle from "./App.tsx";
import MainComp from "./App.tsx";

import Review from "./App.tsx";
import Footer from "./App.tsx";

test('MatchSnapShot test App 1', () => {
	const tree = create(<App />)
	expect(tree.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test Header 1', () => {
	const tree = create(<Header />)
	expect(tree.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test MainTitle 1', () => {
  const tree = create(<MainTitle />)
  expect(tree.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test MainComp 1', () => {
  const tree = create(<MainComp />)
  expect(tree.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test Review 1', () => {
	const tree = create(<Review />)
	expect(tree.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test Footer 1', () => {
	const tree = create(<Footer />)
	expect(tree.toJSON()).toMatchSnapshot();
})

describe('suite name', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})


const getLatest = (index = messages.items.length - 1) => messages.items[index]

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
}

describe('reading messages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should get the latest message with a spy', () => {
    const spy = vi.spyOn(messages, 'getLatest')
    expect(spy.getMockName()).toEqual('getLatest')

    expect(messages.getLatest()).toEqual(
      messages.items[messages.items.length - 1],
    )

    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockImplementationOnce(() => 'access-restricted')
    expect(messages.getLatest()).toEqual('access-restricted')

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should get with a mock', () => {
    const mock = vi.fn().mockImplementation(getLatest)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(1)

    mock.mockImplementationOnce(() => 'access-restricted')
    expect(mock()).toEqual('access-restricted')

    expect(mock).toHaveBeenCalledTimes(2)

    expect(mock()).toEqual(messages.items[messages.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(3)
  })
})