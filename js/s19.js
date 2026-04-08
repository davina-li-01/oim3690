function getGrade(score) {
    if (score >= 90) {
        return 'A';
    }

    if (score >= 60) {
        return 'Pass';
    }

    return 'Fail';
}

const result = getGrade(95);
console.log(`You get ${result}!`);

const square = x => x ** 2;
console.log(square(5));

const add = (a, b) => a + b;
console.log(add(3, 4));

console.log(typeof getGrade); // function
console.log(typeof add); // function

const fruits = ['apple', 'banana', 'cherry'];
const person = { name: 'Alice', age: 30 };

console.log(typeof fruits);
console.log(Array.isArray(fruits)); // true
console.log(typeof person);
console.log(Array.isArray(person)); // false
console.log(fruits[0])

fruits[11] = 'mango';
console.log(fruits);