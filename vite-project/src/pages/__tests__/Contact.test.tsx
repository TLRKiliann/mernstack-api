import React from "react";
import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import Contact from "../Contact.tsx";

test('MatchSnapShot test Contact', () => {
	const tree = create(<Contact />)
	expect(tree.toJSON()).toMatchSnapshot();
})