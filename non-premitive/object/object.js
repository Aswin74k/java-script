const person = {
    name: 'head',
    age: 22,
    isStudent: false
}
console.log(person.name);
console.log(person.age);

//add or modify datas
person.city ="perth"

person.age =31;

console.log(person)

//delete city from person details
delete person.city;
console.log('final person details is:',person);
