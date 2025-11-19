
const secretNum = Math.floor(Math.random() * 50) + 1;
const userGuess = 23; // testing value given by me

console.log(`SecretNum (for testing): ${secretNum}`);
console.log(`Your guess: ${userGuess}`);

if (userGuess === secretNum) {
  console.log("Correct guess!");
} else {
  const delta = Math.abs(secretNum - userGuess);
  if (delta <= 3) {
    console.log("Very close!");
  } else {
    if (userGuess > secretNum) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
}
