import React from "react";
import { screen } from '@testing-library/react';
import { expect, vi } from 'vitest'
import ChatUser from "../ChatUser.tsx";
import handleVsSendMsg from "../ChatUser.tsx";


test('handleVsSendMsg return', () => {
  const handleVsSendMsg = vi.fn(() => true);
  handleVsSendMsg();
  expect(handleVsSendMsg).toHaveReturned();
});

