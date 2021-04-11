
const calculate = (arr) => {
  let result = NaN

  let resultArray = arr.filter(value => {
    return goodValues(value)
  })

  switch ((resultArray[1])) {
    case '+':
      result = resultArray[0] + resultArray[2]
      break
    case '-':
      result = resultArray[0] - resultArray[2]
      break
    case '*':
      result = resultArray[0] * resultArray[2]
      break
    case '/':
      result = resultArray[0] / resultArray[2]
      break
  }

  return result
}

const goodValues = (value) => {
  if (value == Number(value) && value !== '') {
    return true
  } else {
    switch (value) {
      case Number(value):
      case null:
      case '+':
      case '-':
      case '*':
      case '/':
        return true
      default:
        return false
    }
  }
}


module.exports = calculate
