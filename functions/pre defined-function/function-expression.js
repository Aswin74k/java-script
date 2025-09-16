//is a way to define a function inside an expression and assign to a variable
// constsum=function(){}

const greet = function(){
    console.log("hai");
}
greet(); //calling function
console.log(typeof greet)

//key features
//1. anonymous or named
//2.not hoisted
//3.can be used as an argument
//4.can be assingned to variables/objects