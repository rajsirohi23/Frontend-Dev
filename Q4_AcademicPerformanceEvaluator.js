

const marks = [88, 79, 91, 85, 90];

const hasFail = marks.some(m => m < 35);

const total = marks.reduce((s, m) => s + m, 0);
const percentage = (total / (marks.length * 100)) * 100;

if (hasFail) {
  console.log("Detained (one or more subjects below 35).");
} else {
  if (percentage >= 85) {
    console.log("Promoted with Distinction");
  } else if (percentage >= 50 && percentage <= 84) {
    console.log("Promoted");
  } else {
    console.log("Detained");
  }
}

console.log(`Total: ${total}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
