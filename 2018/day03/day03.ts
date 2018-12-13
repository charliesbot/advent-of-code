import { input } from "./day03.input"

type Values = {
  width: number
  height: number
  xCoord: number
  yCoord: number
}

const getInitialValues = (data: string) => {
  const [numberWithHash, rest] = data.split("@")
  const id = parseInt(numberWithHash.slice(1))
  const [rawCoords, rawSizes] = rest.split(":")
  const [xCoord, yCoord] = rawCoords.split(",").map(coord => parseInt(coord))
  const [width, height] = rawSizes.split("x").map(size => parseInt(size))
  return {
    width,
    height,
    xCoord,
    yCoord,
  }
}

const evaluation = (entries: any, values: Values) => {
  let { width, height, xCoord, yCoord } = values
  let conflict = 0
  for (let row = yCoord; row < yCoord + height; row++) {
    for (let column = xCoord; column < xCoord + width; column++) {
      entries[row] = entries[row] || {}

      if (entries[row][column]) {
        continue
      }

      if (entries[row][column] === false) {
        entries[row][column] = true
        conflict++
        continue
      }

      entries[row][column] = false
    }
  }
  return conflict
}

const getSquareInches = (input: string[]) => {
  const entries = {}
  let conflicts = 0
  for (let i = 0; i < input.length; i++) {
    const values = getInitialValues(input[i])
    conflicts += evaluation(entries, values)
  }
  return conflicts
}

console.log(getSquareInches(input))
