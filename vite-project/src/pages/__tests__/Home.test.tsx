import React from "react"
import {assert, afterEach, describe, expect, test, it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import VoletLeft from '../Home'
import VoletRight from '../Home'
import MainTitle from '../Home'
import MainComp from '../Home'
import Footer from '../Home'
import NavBar from '../Home'
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';
//assertType, expectTypeOf
/*
test('MatchSnapShot test VoletLeft', () => {
  const treeVL = create(
    <MemoryRouter>
      <VoletLeft />
    </MemoryRouter>
  )
  expect(treeVL.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test VoletRight', () => {
  const treeVR = create(
    <MemoryRouter>
      <VoletRight />
    </MemoryRouter>
    )
  expect(treeVR.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test MainTitle', () => {
  const treeMainTitle = create(
    <MemoryRouter>
      <MainTitle />
    </MemoryRouter>
  )
  expect(treeMainTitle.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test MainComp', (users) => {
  const treeMainComp = create(
    <MemoryRouter>
      <MainComp users={users} />
    </MemoryRouter>
  )
  expect(treeMainComp.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Footer 1', () => {
  const tree2 = create(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
    )
  expect(tree2.toJSON()).toMatchSnapshot();
})
*/
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

describe('Home reading messages', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('Home should get the latest message with a spy', () => {
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

  it('Home should get with a mock', () => {
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