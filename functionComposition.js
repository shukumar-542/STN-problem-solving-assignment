// const numberSquare = (number)=>{
//     return number * number
// }

// const doubleNumber = (number)=>{
//     return number * 2
// }
// const addFiveNumber = (number)=>{
//     return number + 5
// }

// const compositionFunction =(number)=>{
//     const square = numberSquare(number);
//     const double = doubleNumber(square);
//     return addFiveNumber(double)

// }
// const result = compositionFunction(5);
// console.log(result);


// function composition is the 

function print(result){
    console.log(result);
}

function add (a, b){
    return a + b
}

function multiply(num){
    return num * 2
}

 print(multiply(add(3,5)))

