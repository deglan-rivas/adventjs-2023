import { describe, expect, it } from 'vitest'
import { findFirstRepeated } from '../src/01'

describe('should filter first element repeated', () => {
  it('should be a function', () => {
    expect(typeof findFirstRepeated).toBe('function')
  })

  it('should throw error if not an array is provided', () => {
    expect(() => findFirstRepeated()).toThrow()
    expect(() => findFirstRepeated('2')).toThrow()
    expect(() => findFirstRepeated(true)).toThrow()
    expect(() => findFirstRepeated(1)).toThrow()
  })

  it('should throw error if an empty array is provided', () => {
    expect(() => findFirstRepeated([])).toThrow()
  })

  it('should return -1 if there is no repeated element', () => {
    expect(findFirstRepeated([1, 2, 3])).toBe(-1)
  })

  it('should return the element repeated', () => {
    expect(findFirstRepeated([1, 2, 3, 3])).toBe(3)
    expect(findFirstRepeated([1, 2, 3, 3, 5, 6])).toBe(3)
    expect(findFirstRepeated([1, 1, 2, 3, 5, 6])).toBe(1)
  })

  it('should return the first element repeated', () => {
    expect(findFirstRepeated([1, 2, 3, 3, 1, 5, 6])).toBe(3)
    expect(findFirstRepeated([1, 2, 3, 1, 3, 5, 6])).toBe(1)
    expect(findFirstRepeated([1, 1, 2, 3, 3, 5, 6])).toBe(1)
    expect(findFirstRepeated([1, 1, 2, 3, 3, 5, 6, 6, 7])).toBe(1)
  })
})
