var names = ['ri', 'jz', 'cookie'];

names.forEach(function (name) {
  console.log('forEach', name);
});
// forEach ri
// forEach jz
// forEach cookie

// Use arrow functions in place of anonymous functions
// Anonymous functions have a this binding
// Arrow functions take on the parent's this binding
names.forEach((name) => {
  // multiple statement block
  console.log('arrow func', name);
});
// arrow func ri
// arrow func jz
// arrow func cookie

names.forEach((name) => console.log('Sugar', name));
// Sugar ri
// Sugar jz
// Sugar cookie

// named function example that uses the arrow function
var returnMe = (name) => name + '!';
console.log(returnMe('Riana'));
// Riana!

// Example to demo the difference btw anon and arrow func context
var person = {
  name: 'Mojo',
  greet: function () {
    names.forEach(function (name) {
      // this does not refer to the person object
      console.log(this.name + ' says hi to ' + name);
    });
  } 
};

person.greet();
// undefined says hi to ri
// undefined says hi to jz
// undefined says hi to cookie

var person = {
  name: 'Fuzzy',
  greet: function () {
    // this keyword still refers to the person object because => does not update context
    names.forEach((name) => console.log(this.name + ' says hi to ' + name));
  }
};
person.greet();
// Fuzzy says hi to ri
// Fuzzy says hi to jz
// Fuzzy says hi to cookie

// Arrow function challenge
function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

// no return keyword needed, anything after the => is returned
var addExpression = (a, b) => a + b;

console.log(add(1, 2));
console.log(addStatement(9, 0));
console.log(addExpression(4, 4));
