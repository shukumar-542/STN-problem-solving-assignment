// Higher order function flowing:
    // -- Take one or more function as an argument ex: filter,map,find
    // Return function as it result

const createMultiple = (num) =>{
 return function (n){
    return num * n
 }
}

const result = createMultiple(5)
console.log(result(5));