import { expect, vi } from 'vitest'

test("1 servicePrivate", () => {
  vi.mock('../servicePrivate.ts', () => ({
    getMsgPrivate: vi.fn()
  }))
  console.log("ok servicePrivate 1")
})

test("2 servicePrivate", () => {
  vi.mock('../servicePrivate.ts', () => ({
    postMsgPrivate: vi.fn()
  }))
  console.log("ok servicePrivate 2")
})
