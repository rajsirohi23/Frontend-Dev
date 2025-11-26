class BankAccount {
  #balance = 0

  deposit(amount) {
    this.#balance += amount
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw "Insufficient balance"
    }
    this.#balance -= amount
  }

  getBalance() {
    return this.#balance
  }
}

let acc = new BankAccount()

acc.deposit(5000)
acc.deposit(2000)
console.log("Balance:", acc.getBalance())

try {
  acc.withdraw(8000)
} catch (e) {
  console.log("Error:", e)
}

console.log("Final Balance:", acc.getBalance())
