// Higher order function flowing:
    // -- Take one or more function as an argument ex: filter,map,find
    // Return function as it result

const createMultiple = (num) =>{
 return function (n){
    return num * n
 }
}

const result = createMultiple(5)
// console.log(result(5));

const array = [1,2,3,4,5,6,1,2,2,2]
const uniqueArray = [...new Set(array)]
console.log(uniqueArray);

