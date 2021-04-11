
const calculate = (arr) => {
  let result = NaN

  const filteredArray = (arr) => {
    let newArray = arr.filter(value => {
      return goodValues(value)
    })

    return newArray
  }

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
  if (value == Number(value)) {
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
