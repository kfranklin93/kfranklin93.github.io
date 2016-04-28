function makePerson(fullName, currentAge) {
    var _name = fullName; // 1
    var _age = currentAge; // 1

    var person = { // 2  and 3
        getName: function() {
            return (_name);
        },

        getAge: function() {
            return (_age - 10);
        }
    };

    return (person);
}
// Create a new person instance.
var bob = makePerson("Bob", 45); //5
//

// Check to see if the age property exists in a public
// portion of the person instance.
// 7
console.log("Can we access the Bob's _age?")
console.log("_age" in bob)

// Get the age using the accessors.
// 8
console.log("Age is (little lie here):")
console.log(bob.getAge())
);
