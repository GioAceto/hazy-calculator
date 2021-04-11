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

module.exports = goodValues