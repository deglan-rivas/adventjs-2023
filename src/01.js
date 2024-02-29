export const findFirstRepeated = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error('numbers must be an array')
  if (numbers.length === 0) throw new Error('numbers must not be empty')

  const unrepeatedNumbers = [...new Set(numbers)]
  if (unrepeatedNumbers.length === numbers.length) return -1
  // console.log(unrepeatedNumbers)

  // let firstRepeated = -1
  // let hasFound = false
  // numbers.forEach((number, index) => {
  //   if (unrepeatedNumbers[index] !== number && !hasFound) {
  //     firstRepeated = number
  //     hasFound = true
  //   }
  // })

  // return firstRepeated

  // REFACTOR 1
  const firstRepeated = numbers.find((number, index) => unrepeatedNumbers[index] !== number)
  return firstRepeated
}

// const a = findFirstRepeated([1, 2, 3, 3, 5])
// console.log(a)

// FINAL SOLUTION TO https://adventjs.dev/es/challenges/2023/1
// function findFirstRepeated(gifts) {
//   const unrepeatedNumbers = [...new Set(gifts)]
//   if (unrepeatedNumbers.length === gifts.length) return -1

//   const firstRepeated = gifts.find((number, index) => unrepeatedNumbers[index] !== number)
//   return firstRepeated
// }
