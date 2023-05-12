import { expect, vi } from 'vitest'

test("1 serviceRouting", () => {
  vi.mock('../serviceRouting.ts', () => ({
    getAllMembers: vi.fn()
  }))
  console.log("ok serviceRouting 1")
})

test("2 serviceRouting", () => {
  vi.mock('../serviceRouting.ts', () => ({
    createMember: vi.fn()
  }))
  console.log("ok serviceRouting 2")
})

test("3 serviceRouting", () => {
  vi.mock('../serviceRouting.ts', () => ({
    updateRoomName: vi.fn()
  }))
  console.log("ok serviceRouting 3")
})

test("4 serviceRouting", () => {
  vi.mock('../serviceRouting.ts', () => ({
    putInvitation: vi.fn()
  }))
  console.log("ok serviceRouting 4")
})

test("5 serviceRouting", () => {
  vi.mock('../serviceRouting.ts', () => ({
    putInvitationSender: vi.fn()
  }))
  console.log("ok serviceRouting 5")
})

test("6 serviceRouting", () => {
  vi.mock('../serviceRouting.ts', () => ({
    updateToResetParamsFirstUser: vi.fn()
  }))
  console.log("ok serviceRouting 6")
})

test("7 serviceRouting", () => {
  vi.mock('../serviceRouting.ts', () => ({
    updateToResetParamsSecondUser: vi.fn()
  }))
  console.log("ok serviceRouting 7")
})
