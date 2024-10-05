
const user = {firstName: 'John', lastName: 'Doe', age: 30};
const {age, ...rest} = user;

console.log(age); // 30
console.log(rest); // {firstName: 'John', lastName: 'Doe'}
