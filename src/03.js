export const findNaughtyStep = (original, modified) => {
  if (typeof original !== 'string') throw new Error('original must be a string')
  if (typeof modified !== 'string') throw new Error('modified must be a string')

  if (original === modified) return ''
  // convert 'abcde' into ['a', 'b', 'c', 'd', 'e']
  // original = [...new Set(original)]
  original = original.split('')
  modified = modified.split('')
  console.log(modified)

  // el error estaba en usar letter === original
  // en el ternario siempre agregar el ? '' : '' ambos casos
  // no dejar el : '' porque sino funciona incorrectamente tmr xD
  // siempre darle valor inicial al acumulador o tomará el primer valor del string y eso es peligroso para este ejemplo xd
  const naughtyLetters = original.reduce((acc, letter, index) => letter !== modified[index] ? letter !== modified[index + 1] ? acc += letter : acc += modified[index] : acc, '')
  console.log(naughtyLetters)
  return naughtyLetters ? naughtyLetters[0] : modified[modified.length - 1]
}

// findNaughtyStep('hello', 'hola')
findNaughtyStep('abcd', 'abcde')
