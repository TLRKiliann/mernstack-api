import React from "react";
import {create} from 'react-test-renderer';
import PageNotFound from "../PageNotFound.tsx";

//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';

test('MatchSnapShot test PageNotFound', () => {
  const tree = create(<PageNotFound />)
  expect(tree.toJSON()).toMatchSnapshot();
})