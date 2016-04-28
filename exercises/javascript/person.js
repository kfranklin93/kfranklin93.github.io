var Kenan = {
    firstName: 'Kenan',
    lastName: 'Franklin',
    age: 22,
    canLegallyDrink: true,
    favoriteHobbies: [
        'photography',
        'music',
        'dancing'
    ],
    fullName: function() {
        return this.firstName + ' ' + this.lastName +
            ' is ' + this.age + ' years old.';
    }
};
console.log(Kenan);
console.log(Kenan.fullName());
