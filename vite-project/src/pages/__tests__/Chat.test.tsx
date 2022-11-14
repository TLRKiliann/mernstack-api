import React from "react";
import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
//import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import Chat from "../Chat.tsx";

test('MatchSnapShot test Chat', () => {
	const tree = create(<Chat />)
	expect(tree.toJSON()).toMatchSnapshot();
})