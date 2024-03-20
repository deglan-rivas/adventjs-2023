export function cyberReindeer (road, time) {
  if (typeof road !== 'string') throw new Error('road must be a string')
  if (typeof time !== 'number') throw new Error('time must be a number')

  let result = []
  let stoppedSanta = ''
  // let canPass = true
  let extraDelays = 0
  let permanetDelays = 0
  new Array(time).fill('').forEach((_, index) => {
    // if (index === 0) { return }
    let roadAuxiliar = road.replace('S', '.')
    const currentValue = roadAuxiliar[index]
    if (index <= 4) {
      if (extraDelays > 0) {
        result = [...result, stoppedSanta]
        extraDelays--
        permanetDelays++
        return
      }
      if (currentValue === '|') {
        stoppedSanta = roadAuxiliar.substring(0, index - 1) + 'S' + roadAuxiliar.substring(index)
        result = [...result, stoppedSanta]
        // canPass = false
        extraDelays = 4 - index
        permanetDelays++
        return
      }
    }
    if (index > 4) { roadAuxiliar = roadAuxiliar.replaceAll('|', '*') }
    roadAuxiliar = roadAuxiliar.substring(0, index - permanetDelays) + 'S' + roadAuxiliar.substring(index + 1 - permanetDelays)
    result = [...result, roadAuxiliar]
  })

  console.log(result)
  return result
}

const road = 'S..|...|..'
const time = 10

const result = cyberReindeer(road, time)
console.log(result)
