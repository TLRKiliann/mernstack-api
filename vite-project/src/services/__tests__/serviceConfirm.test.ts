import { expect, vi } from 'vitest'

test("1 serviceConfirm", () => {
  vi.mock('../serviceConfirm.ts', () => ({
    updateResponseUser: vi.fn()
  }))
  console.log("ok serviceConfirm 1")
})

test("2 serviceConfirm", () => {
  vi.mock('../serviceConfirm.ts', () => ({
    updateUsrRetConf: vi.fn()
  }))
  console.log("ok serviceConfirm 2")
})

test("3 serviceConfirm", () => {
  vi.mock('../serviceConfirm.ts', () => ({
    updateUsrCancelConf: vi.fn()
  }))
  console.log("ok serviceConfirm 3")
})
