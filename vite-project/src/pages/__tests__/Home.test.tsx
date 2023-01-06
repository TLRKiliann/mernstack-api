import React from "react"
import {assert, afterEach, describe, expect, test, it, vi} from 'vitest'
//import {fireEvent, render, screen} from '@testing-library/react'
import { create } from 'react-test-renderer'
import VoletLeft from '../volets/VoletLeft'
import VoletRight from '../volets/VoletRight'
import MainTitle from '../../components/MainTitle'
import MainComp from '../../components/MainComp'
import Footer from '../../components/Footer'
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';
//assertType, expectTypeOf

test('MatchSnapShot test VoletLeft', () => {
  const treeVL = create(<VoletLeft />)
  expect(treeVL.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test VoletRight', () => {
  const treeVR = create(<VoletRight />)
  expect(treeVR.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test MainTitle', () => {
  const treeMainTitle = create(<MainTitle />)
  expect(treeMainTitle.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test MainComp', () => {
  const treeMainComp = create(<MainComp />)
  expect(treeMainComp.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Footer 1', () => {
  const tree2 = create(<Footer />)
  expect(tree2.toJSON()).toMatchSnapshot();
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