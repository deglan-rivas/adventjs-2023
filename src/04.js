export function decode (message) {
  if (typeof message !== 'string') throw new Error('message must be a string')

  const messageAux = message.split('')
  console.log(messageAux)

  const firstBracket = messageAux.findIndex(letter => letter === '(')
  const lastBracket = messageAux.findLastIndex(letter => letter === ')')

  console.log(firstBracket, lastBracket)

  const contentBracket = messageAux.slice(firstBracket + 1, lastBracket)
  console.log(contentBracket)

  const reverseContent = contentBracket.reduce((acc, letter, index, array) => acc + array[array.length - index - 1], '')
  console.log(reverseContent)

  const finalContentStart = message.split('(', 2)[0]
  console.log(finalContentStart)
  const finalContentEnd = message.split('(', 2)[1].split(')', 2)[1]
  console.log(finalContentStart, finalContentEnd)

  return finalContentStart + reverseContent + finalContentEnd
}
