class Movie {
  constructor(title, director, genre, year, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year,
    this.rating = rating
  }

  get overview (){
    return this.getOverview()
  }

  getOverview(){
    return `${this.title}, ${this.genre} 
      film directed by ${this.director} 
      was released in ${this.year}. 
      It received a rating of ${this.rating}.`
  }
}

const lordOfRings = new Movie('Lord of the Rings', 'WNS', 'Fantasy', 1990, 5);

console.log(lordOfRings.overview)