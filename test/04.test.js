import { describe, expect, it } from 'vitest'
import { decodeRefactor } from '../src/04'

describe('testing example 04', () => {
  it('should be a function', () => {
    expect(typeof decodeRefactor).toBe('function')
  })

  it('should throw error if message is not string', () => {
    expect(() => decodeRefactor(1)).toThrow()
    expect(() => decodeRefactor([])).toThrow()
    expect(() => decodeRefactor({})).toThrow()
    expect(() => decodeRefactor(true)).toThrow()
  })

  it('should return decodeRefactord message', () => {
    expect(decodeRefactor('hola (odnum) titis')).toBe('hola mundo titis')
    expect(decodeRefactor('hola (o(und)m) titis')).toBe('hola mundo titis')
    expect(decodeRefactor('hola (o(u(dn))m) titis')).toBe('hola mundo titis')
  })
})
