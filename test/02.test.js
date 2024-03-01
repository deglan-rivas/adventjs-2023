import { describe, expect, it } from 'vitest'
import { manufacture } from '../src/02'

describe('all suites from 02', () => {
  it('should be a function', () => {
    expect(typeof manufacture).toBe('function')
  })

  it('should recieve an array and string as parameters', () => {
    expect(() => manufacture([], 1)).toThrow()
    expect(() => manufacture('string', 'string')).toThrow()
  })

  // it('should return an array of strings', () => {
  //   // expect(typeof manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toBe('object')
  //   // expect(() => manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toBeTypeOf('array')

  //   const result = manufacture(['tren', 'oso', 'pelota'], 'tronesa')

  //   expect(Array.isArray(result)).toBe(true)
  //   result.forEach((element) => expect(element).toBeTypeOf('string'))
  // })

  // it('should filter available gifts', () => {
  //   const result1 = manufacture(['tren', 'oso', 'pelota'], 'tronesa')
  //   const result2 = manufacture(['juego', 'puzzle'], 'jlepuz')
  //   const result3 = manufacture(['libro', 'ps5'], 'psli')

  //   expect(result1).toEqual(['tren', 'oso'])
  //   expect(result2).toEqual(['puzzle'])
  //   expect(result3).toEqual([])
  // })
})
