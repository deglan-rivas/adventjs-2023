export function cyberReindeer (road, time) {
  if (typeof road !== 'string') throw new Error('road must be a string')
  if (typeof time !== 'number') throw new Error('time must be a number')

  let result = []
  new Array(time).fill('').forEach((currentValue, index) => {
    // if (index === 0) { return }
    let roadAuxiliar = road.replace('S', '.')
    roadAuxiliar = roadAuxiliar.substring(0, index) + 'S' + road.substring(index + 1)
    result = [...result, roadAuxiliar]
  })

  console.log(result)
  return result
}
