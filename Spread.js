//Spread (...)

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

// another example
const number = [1,2,3];
const newNumber = [number, 4];

console.log(newNumber);

// Example
const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: '28'
}

console.log(newPerson);
