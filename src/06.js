export function maxDistance (movements) {
  if (typeof movements !== 'string') throw new Error('movements must be a string')

  let wildcards = 0
  let distance = 0

  movements.split('').forEach(char => {
    if (char === '<') distance--
    if (char === '>') distance++
    if (char === '*') wildcards++
  })

  return Math.abs(distance) + wildcards
}

const result = maxDistance('><<<')
console.log(result)
