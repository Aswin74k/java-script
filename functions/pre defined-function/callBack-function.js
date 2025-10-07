//function passing another function as an argument

//features
//asynchronous operations
//customize behaviour of general purpose functions
//avoid blocking code execution

//this is our callBack function
function  greetUser(name){
    console.log(`hello ${name}`);
    
}

//this function takes another function(callback function) as an argument

function greetUserInput(callback){
    const name = "head";
    callback(name); //calling the callback function with the username
}

greetUserInput(greetUser);


//pyramid of boom (callback hell) - multipe nested callbacks make the code difficult to read and maintain
