//-----function declaration-----
//function add(a,b){
//return a+b;
//}
//console.log(add(2,4))


//arrow function is a shortterm syntax for writing functions in js, also introduced in ES6 

//using arrow function
const add = (a, b) => a + b;
console.log(add(2,4));


//----single parameters (no parantheses needed) ---

const square = x => x * x
console.log("square of 4:",square(4));

//---no parameters 
const greet = () => console.log("hello");
greet()


//---multi-ine function---

    const divide = (a,b) => {
    const result = a/b;
    return result;
    }

    console.log("division of 10,2 is:",divide(10,2));

