import { describe, expect, it } from 'vitest'
import { findNaughtyStep } from '../src/03'

describe('testing example 03', () => {
  it('should be a function', () => {
    expect(typeof findNaughtyStep).toBe('function')
  })

  it('should throw error if both strings are not provided', () => {
    expect(() => findNaughtyStep([], 2)).toThrow()
    expect(() => findNaughtyStep('ga', true)).toThrow()
    expect(() => findNaughtyStep(true, 'ga')).toThrow()
  })

  it('should return \'\' if there is no naughty', () => {
    expect(findNaughtyStep('hello', 'hello')).toBe('')
  })

  it('should return first naughty letter', () => {
    expect(findNaughtyStep('hello', 'hola')).toBe('e')
    expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
    expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
    expect(findNaughtyStep('xxxx', 'xxoxx')).toBe('o')
  })
})
