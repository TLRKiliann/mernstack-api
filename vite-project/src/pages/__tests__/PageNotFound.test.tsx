import React from "react"
import { test, expect, vi } from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import { Link } from 'react-router-dom'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'
import PageNotFound from "../PageNotFound.tsx"
//import userEvent from '@testing-library/user-event'
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom"
//import { act } from 'react-dom/test-utils'


test('PageNotFound testid', () => {
  render(    
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  )
  const mytestid = screen.getByTestId("pagenotfoundtest")
  expect(mytestid).toBeInTheDocument()
})


test("PageNF Link test", () => {
  const pnfComp = create(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  )
  expect(pnfComp.toJSON()).toMatchSnapshot()
})
