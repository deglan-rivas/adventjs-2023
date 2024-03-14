import { describe, expect, it } from 'vitest'
import { findNaughtyStep } from '../src/03'

describe('testing example 03', () => {
  it('should be a function', () => {
    expect(typeof findNaughtyStep).toBe('function')
  })
})
