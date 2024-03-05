// Create pseudoId to use in Website Cards

function generateRandomNumber(length: number) {
  const min = Math.pow(10, length - 1)
  const max = Math.pow(10, length) - 1

  return Math.floor(Math.random() * (max - min + 1)) + min
}
function createPseudoId(websiteId: number) {
  const firstNumber = generateRandomNumber(3).toString()
  const secondNumber = generateRandomNumber(3).toString()
  const websiteIdString = websiteId.toString()
  const combinedString = firstNumber + websiteIdString + secondNumber
  const combinedNumber = parseInt(combinedString, 10)
  return combinedNumber
}

export { createPseudoId }
