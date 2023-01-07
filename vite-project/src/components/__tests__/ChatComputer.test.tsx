import React from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { useAuthLogin } from '../../context/AuthProvider'
import { screen, render } from '@testing-library/react';
import { test, expect, vi, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import ChatComputer from "../ChatComputer";
import handleSetUserRoom from "../ChatComputer"
import handleNavigation from "../ChatComputer"

test("ChatComputer context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Profile state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test("ChatComputer hook testing", () => {
  const mockedNavigate = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useNavigate: () => mockedNavigate
  }))

  const mockedParams = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useParams: () => ({mockedParams})
  }))

  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => ({mockedAuth})
  }))
})

test('ChatComputer handleSetUserRoom return link', () => {
  const beverage = {link: "newRoom" }
  const handleSetUserRoom = vi.fn(beverage => {beverage})
  handleSetUserRoom()
  expect(handleSetUserRoom).toHaveReturned("newRoom")
})

test('ChatComputer handleNavigation return link', () => {
  const beverage = {link: "secRoom" }
  const handleNavigation = vi.fn(beverage => {beverage})
  handleNavigation()
  expect(handleNavigation).toHaveReturned("secRoom")
})