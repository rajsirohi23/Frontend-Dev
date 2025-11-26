function applyOperation(numbers, operation) {
  let result = []
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]))
  }
  return result
}

function double(n) {
  return n * 2
}

function square(n) {
  return n * 2
}

let nums = [1, 2, 3, 4]

let doubled = applyOperation(nums, double)
let squared = applyOperation(nums, square)

console.log("Doubled:", doubled)
console.log("Squared:", squared)
