import { it, expect, describe } from 'vitest'
import { organizeGifts } from '../src/08'

describe('testing example 08', () => {
  it('should be a function', () => {
    expect(typeof organizeGifts).toBe('function')
  })

  it('should throw error if not a string is provided', () => {
    expect(() => organizeGifts(1)).toThrow()
    expect(() => organizeGifts([])).toThrow()
    expect(() => organizeGifts({})).toThrow()
    expect(() => organizeGifts(true)).toThrow()
  })

  it('should return a string', () => {
    const gifts = '20a'

    const result = organizeGifts(gifts)

    expect(typeof result).toBe('string')
  })

  it('should return the order of the gifts', () => {
    const gifts1 = '76a11b9c'
    const gifts2 = '20a'

    const result1 = organizeGifts(gifts1)
    const result2 = organizeGifts(gifts2)

    expect(result1).toBe('[a]{a}{a}(aaaaaa){b}(b)(ccccccccc)')
    expect(result2).toBe('{a}{a}')
  })
})

// TODO separar las demás funciones en otro archivo y hacerles testing
// check se puede agregar variables desde el debug console del nodejs pero en 2 tiempos: primero el let test y luego test = 'ga' -> mover al watch para verla, sino no aparece en el scope local de la fn ni de la main xd
