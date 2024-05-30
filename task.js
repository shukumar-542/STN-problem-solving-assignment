// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
const square = (number) =>{
    return number * number
}
const double = (num)=>{
    return num + num
}
const add  = (num)=>{
    return num + 5
}

const result = add(double(square(5)))
console.log(result);