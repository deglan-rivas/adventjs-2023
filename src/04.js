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

export function decodeRefactor (message) {
  if (typeof message !== 'string') throw new Error('message must be a string')

  if (!message.includes('(') || !message.includes(')')) return message

  const startIndex = message.indexOf('(')
  const lastIndex = message.lastIndexOf(')')
  const startContent = message.slice(0, startIndex)
  const bracketContent = message.slice(startIndex + 1, lastIndex)
  const endContent = message.slice(lastIndex + 1)

  console.log(startContent, (bracketContent), endContent)
  return startContent + decodeRefactor(reverse(bracketContent)) + endContent
}

export function reverse (string) {
  return string.split('').reduce((acc, letter, index, array) => {
    const mirrorLetter = array[array.length - index - 1]
    if (mirrorLetter === ')') return acc + '('
    if (mirrorLetter === '(') return acc + ')'
    return acc + mirrorLetter
  }, '')
}

const a = decodeRefactor('hola (odnum) titis')
// const b = decodeRefactor('hola (o(und)m) titis')
// const c = decodeRefactor('hola (o(u(dn))m) titis')

// para darle submit al adventjs hay que usar function en lugar de arrow function externo, no usar import export ni throw error, todo el código dentro de una sola función
// tmr fallaron 2 casos fuera de los test de prueba que da adventjs -> el tdd se hace justamente para evitar hacer cambios drásticos más adelante: hacer cambios en la semana o sprint5 es distinto a hacerlo en la semana o sprtin1
// por eso llenar de todos los test rojos o casos más disparatados y recién sobre todos esos casos comenzar a extraer la lógica
// falló Test: decode('(olleh) (dlrow)!') y Test: decode('((nta)(sa))') ->
// 1 6 vs 4 9  -> 1 4 ; 6 9
// 1 2 5 vs 4 8 9 -> 1 9 ; 2 4 ; 5 8
