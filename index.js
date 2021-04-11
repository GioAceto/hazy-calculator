const goodValues = require('./good-values')

const calculate = (arr) => {
  let result = NaN

  let resultArray = arr.filter(value => goodValues(value))

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

module.exports = calculate
