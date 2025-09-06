// logical and (&&)
console.log("true && true: ",true && true);
console.log("true && true: ",true && false);


let a = 2;
let b = 21;

let x = a > b && b > a
console.log(x);

//logical OR (||)

console.log("true || false: ",true || false);
console.log("false || false: ",false || false);


let y = a > b || b > a
console.log("OR: ",y);


//logical NOT (!)
console.log("!true: ",!true);

let z = !(a > b)
console.log("NOT: ", z);
