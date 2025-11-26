class FitnessAnalytics {
  constructor(data) {
    if (data.length === 0) {
      throw "Dataset is empty"
    }
    this.data = data
  }

  getActiveUsers() {
    return this.data.filter(function (item) {
      return item.steps > 7000
    })
  }

  getAverageCalories() {
    let total = this.data.reduce(function (a, b) {
      return a + b.calories
    }, 0)
    return total / this.data.length
  }

  getUserSummary() {
    return this.data.map(function (item) {
      return item.user + " burned " + item.calories + " calories"
    })
  }
}

let info = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
]

try {
  let app = new FitnessAnalytics(info)

  console.log("Active Users:", app.getActiveUsers())
  console.log("Average Calories:", app.getAverageCalories())
  console.log("Summary:", app.getUserSummary())
} catch (e) {
  console.log("Error:", e)
}
