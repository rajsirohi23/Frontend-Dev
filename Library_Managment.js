class Book {
  constructor(title, author, isbn, isIssued) {
    this.title = title
    this.author = author
    this.isbn = isbn
    this.isIssued = isIssued
  }

  issueBook() {
    this.isIssued = true
  }

  returnBook() {
    this.isIssued = false
  }

  getDetails() {
    return this.title + " - " + this.author + " (ISBN: " + this.isbn + ")"
  }
}

let b1 = new Book("The Alchemist", "Paulo Coelho", "1111", false)
let b2 = new Book("Harry Potter", "J.K. Rowling", "2222", false)
let b3 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "3333", true)
let b4 = new Book("JavaScript Guide", "Mark John", "4444", false)

let books = [b1, b2, b3, b4]

let available = books.filter(function (b) {
  return b.isIssued === false
})

for (let i = 0; i < available.length; i++) {
  console.log(available[i].getDetails())
}

function issueByISBN(code) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].isbn === code) {
      if (books[i].isIssued === false) {
        books[i].issueBook()
        console.log("Book issued:", books[i].getDetails())
      } else {
        console.log("Book already issued")
      }
      return
    }
  }
  console.log("Book not found")
}

issueByISBN("2222")
