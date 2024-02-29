import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

// TODO could recive NaN or 3.1415 to break the tests
describe('all suites from fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should throw error if not a number is provided', () => {
    expect(() => fizzbuzz()).toThrow()
    expect(() => fizzbuzz([])).toThrow()
    expect(() => fizzbuzz('2')).toThrow()
    expect(() => fizzbuzz(true)).toThrow()
  })

  it('should return same number if number is not divisible by 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1)
    expect(fizzbuzz(2)).toBe(2)
    expect(fizzbuzz(4)).toBe(4)
  })

  it('should return Fizz if number provided is divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
    expect(fizzbuzz(6)).toBe('Fizz')
    expect(fizzbuzz(9)).toBe('Fizz')
  })

  it('should return Buzz if number provided is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
    expect(fizzbuzz(10)).toBe('Buzz')
  })

  it('should return FizzBuzz if number provided is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
    expect(fizzbuzz(30)).toBe('FizzBuzz')
    expect(fizzbuzz(45)).toBe('FizzBuzz')
  })
})
