class Student {
  constructor(name, marks) {
    this.name = name
    this.marks = marks
  }

  calculateAverage() {
    let total = this.marks.reduce(function (a, b) {
      return a + b
    }, 0)
    return total / this.marks.length
  }

  getGrade() {
    let avg = this.calculateAverage()
    if (avg >= 90) return "A"
    if (avg >= 75) return "B"
    if (avg >= 50) return "C"
    return "F"
  }
}

let s1 = new Student("Riya", [90, 85, 92])
let s2 = new Student("Aman", [70, 75, 68])
let s3 = new Student("Karan", [45, 50, 40])

console.log(s1.name, s1.calculateAverage(), s1.getGrade())
console.log(s2.name, s2.calculateAverage(), s2.getGrade())
console.log(s3.name, s3.calculateAverage(), s3.getGrade())
