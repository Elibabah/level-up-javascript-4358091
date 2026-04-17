// function Book (title, author, ISBN, numCopies) {
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies
// }

// Book.prototype.getAvailability = function(){
//   return this.numCopies === 0 ? 'out of stock' : this.numCopies < 10 ? 'low stock' : 'in stock';
// }

// Book.prototype.sell = function(numCopiesSold = 1){
//   this.numCopies -= numCopiesSold;
// }

// Book.prototype.restock = function(numCopies = 5){
//   this.numCopies += numCopies;
// }


class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() { 
    return this.getAvailability(); 
  }

  getAvailability() { 

    const checkAvailability = {
      lessThanZero: 'Number of copies cannot be negative',
      zero: 'out of stock',
      lessThanTen: 'low stock',
      defaultStock: 'in stock'
    }

    if (this.numCopies < 0) return checkAvailability['lessThanZero'];
    if (this.numCopies === 0) return checkAvailability['zero'];
    if (this.numCopies < 10) return checkAvailability['lessThanTen']; 

    return checkAvailability['defaultStock'];
  }

  sell(numCopiesSold = 1) { 
    this.numCopies -= numCopiesSold; 
  }

  restock(numCopies = 5) { 
    this.numCopies += numCopies; 
  }
}

const HungerGames = new Book('The Hunger Games', 'Suzanne Collins', 123456789, 17);

console.log(HungerGames.availability); // 'in stock'
HungerGames.sell(11);
console.log(HungerGames.availability); // 'low stock'
HungerGames.restock(2);
console.log(HungerGames.availability); // 'low stock'
HungerGames.sell(8);
console.log(HungerGames.availability); // 'out of stock'
HungerGames.sell(38);
console.log(HungerGames.availability); // 'out of stock'