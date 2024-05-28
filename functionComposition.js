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

// function print(result){
//     console.log(result);
// }

// function add (a, b){
//     return a + b
// }

// function multiply(num){
//     return num * 2
// }

//  print(multiply(add(3,5)))

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const square = (number)=>{
    return number * number
}
const double = (number)=>{
    return number * 2
}
const add5 = (number) =>{
    return number + 5
}

const result  = add5(double(square(5)))
console.log(result);