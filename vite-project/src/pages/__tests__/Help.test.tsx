import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import Help from "../Help.tsx";

//import { create } from 'react-test-renderer';
//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';

test('my test for custom-element id', () => {
  render(<Help />);
  const mytestid = screen.getByTestId("divtestone");
  expect(mytestid).toBeInTheDocument();
})