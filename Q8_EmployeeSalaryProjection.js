
let currentSalary = 450000;
const incrementRate = 8;

const rows = [];
let salary = currentSalary;

for (let year = 1; year <= 5; year++) {
  salary += (salary * incrementRate) / 100;
  const rounded = Math.round(salary);
  rows.push({ Year: year, "Projected Salary (₹)": rounded, "Increment Rate (%)": incrementRate });
}

console.table(rows);
