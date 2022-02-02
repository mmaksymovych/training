function timeInWords(h, m) {
  const minutes = parseInt(m)

  if (minutes === 0) {
    return `${numbers[h]} o' clock`
  }

  return buildTimeString(h, m)
}

function buildTimeString(h, m) {
  const type = getType(m)

  return `${buildMinutesString(m, type)} ${type} ${buildHoursString(h, type)}`
}

function buildHoursString(h, type) {
  const hour = parseInt(h)

  if (type === TYPES.TO) {
    return hour === 12 ? numbers[1] : numbers[hour + 1]
  }

  return numbers[hour]
}

function buildMinutesString(m, type) {
  if (m === 30) {
    return 'half'
  }

  const quarter = type === TYPES.PAST ? 15 : 45
  if (m === quarter) {
    return 'quarter'
  }

  return type === TYPES.PAST
    ? transformMinutesToString(m)
    : transformMinutesToString(60 - m)
}

function transformMinutesToString(m) {
  let min = null

  if (m > 0 && m < 20) {
    min = transformZeroToTwentyMinutes(m)
  } else {
    min = transformTwentytoSixtyMinutes(m)
  }

  return min + ` minute${m > 1 ? 's' : ''}`
}

function transformZeroToTwentyMinutes(m) {
  return numbers[parseInt(m)]
}

function transformTwentytoSixtyMinutes(m) {
  const minutesString = m + ''

  const [firstNum, secondNum] = minutesString.split('')

  return `${tenParts[firstNum]}${
    numbers[secondNum] ? ' ' + numbers[secondNum] : ''
  }`
}

function getType(m) {
  return m <= 30 ? TYPES.PAST : TYPES.TO
}

const tenParts = {
  2: 'twenty',
  3: 'thirty',
  4: 'fourty',
  5: 'fifty',
}

const numbers = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

const TYPES = {
  PAST: 'past',
  TO: 'to',
}

module.exports = {
  timeInWords,
  transformZeroToTwentyMinutes,
  transformTwentytoSixtyMinutes,
  buildMinutesString,
  TYPES,
  buildHoursString,
}
