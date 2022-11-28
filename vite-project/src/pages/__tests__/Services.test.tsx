import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import Services from "../Services.tsx";
import '@testing-library/jest-dom'
//import {create} from 'react-test-renderer';
//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';

test('renders services link', () => {
  render(<Services />);
  const linkElement = screen.getByText(/services/i);
  expect(linkElement).toBeInTheDocument();
});
