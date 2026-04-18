// Write your code here
class User {
  #username;
  #password;
  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }
}

new User("john_doe", "password123", 30);
console.log(User.username); // Output: undefined
console.log(User.password); // Output: undefined



// const userName = Symbol("username");
// const password = Symbol("password");

// const user = {
//   [userName]: 'elias',
//   [password]: '12345',
//   age: 33
// }
// console.log(user.password);
// console.log(user[password]);
