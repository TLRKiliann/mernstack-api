import React from "react";
//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
//import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import App from "./App.tsx";

test('MatchSnapShot test App 1', () => {
	const tree = create(<App />)
	expect(tree.toJSON()).toMatchSnapshot();
})

