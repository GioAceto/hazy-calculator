const calculate = (arr) => {
  let result = NaN

  const filteredArray = arr.filter((value) => {
    if ((value == parseInt(value) ||
      value === '+' ||
      value === '-' ||
      value === '*' ||
      value === '/') &&
      value !== '' ||
      undefined) {
      return value
    }
  })


  if (filteredArray[1] === '+') {

  }
  return result
}

module.exports = calculate
