var str ='Kenan'
var newStr = str.toUpperCase();
console.log(newStr)
//
var marc = {
  firstName: 'Marc',
  lastName: 'Wright'
};
var shawn = {
  firstName: 'Shawn',
  lastName: 'Johnson'
};
​
var mike = {
  firstName: 'Mike',
  lastName: 'Hopper',
  canLegallyDrink: true,
  age: 29,
  'favorite movie': 'Star Wars',
  bestFriend: shawn,
  friends: [ marc, shawn ],
  favoriteHobbies: [
    'photography',
    'music',
    'cycling'
  ],
  fullName: function() {
    return this.firstName + ' ' + this.lastName +
      ' is ' + this.age + ' years old.';
  },
  birthday: function() {
    this.age = this.age + 1;
  }
};
​
// function birthday(person) {
//   person.age = person.age + 1;
// }
​
console.log(mike);
console.log(mike.fullName());
​
console.log('You are ' + mike.age + ' years old.');
// birthday(mike);
mike.birthday();
console.log('You are ' + mike.age + ' years old.');
​
console.log('Your favorite movie is', mike['favorite movie']);
