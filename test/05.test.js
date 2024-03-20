import { describe, it, expect } from 'vitest'
import { cyberReindeer } from '../src/05'

describe('testing example 05', () => {
  it('should be a function', () => {
    expect(typeof cyberReindeer).toBe('function')
  })

  it('should throw error if first arg is not a string', () => {
    expect(() => cyberReindeer(1, 1)).toThrow()
    expect(() => cyberReindeer([], 1)).toThrow()
    expect(() => cyberReindeer({}, 1)).toThrow()
    expect(() => cyberReindeer(true, 1)).toThrow()
  })

  it('should throw error if second arg is not a number', () => {
    expect(() => cyberReindeer('string', 'string')).toThrow()
    expect(() => cyberReindeer('string', [])).toThrow()
    expect(() => cyberReindeer('string', {})).toThrow()
    expect(() => cyberReindeer('string', true)).toThrow()
  })

  it('should return an array of strings with length equal to time', () => {
    const road = 'hola'
    const time = 3

    const result = cyberReindeer(road, time)

    expect(Array.isArray(result)).toBe(true)
    expect(result.every((element) => typeof element === 'string')).toEqual(true)
    expect(result.length).toBe(time)
  })

  it('should move the Santa for the road without walls')
  const road = 'S...'
  const time = 3

  const result = cyberReindeer(road, time)

  expect(result).toEqual(['S...', '.S..', '..S.'])
})
