export const organizeGifts = (gifts) => {
  if (typeof gifts !== 'string') throw new Error('gifts must be a string')

  const giftList = separateByAlphanumeric(gifts)
  const order = giftList.reduce((acc, gift) => acc + drawOrder(gift), '')
  return order
}

const separateByAlphanumeric = (gifts) => {
  const regex = /[0-9]+[a-zA-Z]/g
  const result = gifts.match(regex)
  return result
}

const drawOrder = (string) => {
  const quantity = +string.substring(0, string.length - 1)
  const letter = string.charAt(string.length - 1)
  const palés = Math.trunc(quantity / 50)
  const boxes = Math.trunc((quantity % 50) / 10)
  const gifts = (quantity % 50) % 10
  const order = drawPalés(palés, letter) + drawBoxes(boxes, letter) + drawGifts(gifts, letter)
  return order
}

const drawPalés = (palés, letter) => {
  return new Array(palés).fill('').reduce((acc, _) => acc + `[${letter}]`, '')
}

const drawBoxes = (boxes, letter) => {
  return new Array(boxes).fill('').reduce((acc, _) => acc + `{${letter}}`, '')
}

const drawGifts = (gifts, letter) => {
  const result = new Array(gifts).fill('').reduce((acc, _) => acc + `${letter}`, '')
  return result && ('(' + result + ')')
}

console.log(drawOrder('76a'))
console.log(organizeGifts('76a11b9c'))
console.log(organizeGifts('20a'))
