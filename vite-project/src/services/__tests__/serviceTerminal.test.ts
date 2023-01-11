import { expect, vi } from 'vitest'

test("1 serviceTerminal", () => {
  vi.mock('../serviceTerminal.ts', () => ({
    getMsgTerminal: vi.fn()
  }))
  console.log("ok serviceTerminal 1")
})

test("2 serviceTerminal", () => {
  vi.mock('../serviceTerminal.ts', () => ({
    postMsgTerminal: vi.fn()
  }))
  console.log("ok serviceTerminal 2")
})
