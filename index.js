const goodValues = require('./good-values')

const calculate = (arr) => {
  let result = NaN
  let resultArray = arr.filter(value => goodValues(value))
  let num1 = resultArray[0]
  let operand = resultArray[1]
  let num2 = resultArray[2]

  switch ((operand)) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
  }

  return result
}

module.exports = calculate
