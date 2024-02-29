// REFACTOR 2 split into 2 files

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('number must be a number')

  // REFACTOR 1 divisible by 3 and 5 means divisible by 15
  // if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz'
  // if (number % 15 === 0) return 'FizzBuzz'
  // if (number % 3 === 0) return 'Fizz'
  // if (number % 5 === 0) return 'Buzz'
  // return number

  // REFACTOR 3 become main function more dynamic
  const WORDS_BY_NUMBER = {
    3: 'Fizz',
    5: 'Buzz'
  }

  let output = ''
  Object
    .entries(WORDS_BY_NUMBER)
    .map(([divisor, word]) => {
      if (number % Number(divisor) === 0) output += word
      return output
    })

  return output === '' ? number : output
}

// fizzbuzz(12)
