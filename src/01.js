export const findFirstRepeated = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error('numbers must be an array')
  if (numbers.length === 0) throw new Error('numbers must not be empty')

  const unrepeatedNumbers = [...new Set(numbers)]
  if (unrepeatedNumbers.length === numbers.length) return -1
  // console.log(unrepeatedNumbers)

  let firstRepeated = -1
  let hasFound = false
  numbers.forEach((number, index) => {
    if (unrepeatedNumbers[index] !== number && !hasFound) {
      firstRepeated = number
      hasFound = true
    }
  })

  return firstRepeated
}

const a = findFirstRepeated([1, 2, 3, 3, 5])
console.log(a)
