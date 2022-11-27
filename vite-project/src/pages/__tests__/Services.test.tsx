import React from "react";
import {create} from 'react-test-renderer';
import Services from "../Services.tsx";

//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';

test('MatchSnapShot test Services', () => {
  const tree = create(<Services />)
  expect(tree.toJSON()).toMatchSnapshot();
})