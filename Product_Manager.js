class Product {
  constructor(id, name, price, category) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
  }

  applyDiscount(percent) {
    let discountAmount = (this.price * percent) / 100
    this.price = this.price - discountAmount
  }

  getDetails() {
    return (
      "ID: " +
      this.id +
      ", Name: " +
      this.name +
      ", Price: " +
      this.price +
      ", Category: " +
      this.category
    )
  }
}

let p1 = new Product(1, "Laptop", 50000, "Electronics")
let p2 = new Product(2, "Shoes", 1200, "Fashion")
let p3 = new Product(3, "Keyboard", 800, "Electronics")
let p4 = new Product(4, "Watch", 2500, "Accessories")

p1.applyDiscount(10)
p2.applyDiscount(5)

let products = [p1, p2, p3, p4]

let expensive = products.filter(function (item) {
  return item.price > 1000
})

for (let i = 0; i < expensive.length; i++) {
  console.log(expensive[i].getDetails())
}
