//import React from "react";
import {beforeEach, describe, expect, test, it, vi} from 'vitest';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';
import {create} from 'react-test-renderer';
import LastNotes from "../LastNotes.tsx";

test('MatchSnapShot test LastNotes 1', () => {
	const tree = create(<LastNotes />)
	expect(tree.toJSON()).toMatchSnapshot();
})