import { describe, expect, it } from 'vitest'
import { decode } from '../src/04'

describe('testing example 04', () => {
  it('should be a function', () => {
    expect(typeof decode).toBe('function')
  })

  it('should throw error if message is not string', () => {
    expect(() => decode(1)).toThrow()
    expect(() => decode([])).toThrow()
    expect(() => decode({})).toThrow()
    expect(() => decode(true)).toThrow()
  })

  it('should return decoded message', () => {
    expect(decode('hola (odnum) titis')).toBe('hola mundo titis')
  })
})
