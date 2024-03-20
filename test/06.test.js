import { describe, expect, it } from 'vitest'
import { maxDistance } from '../src/06'

describe('testing example 06', () => {
  it('should be a function', () => {
    expect(typeof maxDistance).toBe('function')
  })

  it('should throw error if not an string is provided', () => {
    expect(() => maxDistance(1)).toThrow()
    expect(() => maxDistance([])).toThrow()
    expect(() => maxDistance({})).toThrow()
    expect(() => maxDistance(true)).toThrow()
  })

  it('should return a number', () => {
    const movements = '>'

    const result = maxDistance(movements)

    expect(typeof result).toBe('number')
  })

  it('should return the maximum distance', () => {
    const movements1 = '>>*<'
    const movements2 = '<<<>'
    const movements3 = '>***>'

    const result1 = maxDistance(movements1)
    const result2 = maxDistance(movements2)
    const result3 = maxDistance(movements3)

    expect(result1).toBe(2)
    expect(result2).toBe(2)
    expect(result3).toBe(5)
  })
})
