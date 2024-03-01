export const manufacture = (gifts, materials) => {
  if (!Array.isArray(gifts)) throw new Error('gifts must be an array')
  if (typeof materials !== 'string') throw new Error('materials must be a string')

  // const filterAvailableGifts = (gifts, materials) {
  //   return []
  // }
  // return gifts.find(filterAvailableGifts(gifts, materials ))
  materials = [...new Set(materials)]
  const filteredGifts = gifts.filter(gift => {
    gift = [...new Set(gift)]
    return gift.every(letra => materials.includes(letra))
  })

  return filteredGifts

  // return []
}

const result = manufacture(['tren', 'oso', 'pelota'], 'tronesa')
console.log(result)

// usar set para evitar operaciones innecesarias 'alala' solo debe buscar 'a' y 'l' 1 vez y no 2-3 veces para ambos gifts y materials
