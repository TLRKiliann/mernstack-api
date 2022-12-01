import React from "react";
import { fireEvent, screen, render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { expect, vi, test } from 'vitest'
import Login from "../Login.tsx";

//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';

test('MatchSnapShot test Login', () => {
  const tree = create(<Login />)
  expect(tree.toJSON()).toMatchSnapshot();
});

test('renders Login by text', () => {
  render(<Login />);
  const linkElement = screen.getByTestId("logintest");
  expect(linkElement).toBeInTheDocument();
});


describe('<Login />', () => {
  test('The input field and its props', () => {
    render(<Login />)
    const input = document.querySelector(
      'input'
    ) as HTMLInputElement | null;
    
    // input exists in the form component
    expect(input).toBeTruthy()
    
    // is empty
    expect(input?.textContent).toBe('')

    if (input) {
      // test the input text
      input.textContent = 'jane@doe.com'
      expect(input.textContent).toBe('jane@doe.com')

      // test the type prop
      expect(input.type).toBe('email')
      
      // test the name prop
      expect(input.name).toBe('email')

      // test the value prop
      fireEvent.change(input, {
        target: {
          value: 'john@doe.com'
        }
      })
      expect(input.value).toBe('john@doe.com')

      // test the required prop with the jest-dom
      expect(input).toBeRequired()
    }
  });
});