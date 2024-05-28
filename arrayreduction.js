const arr = [1,2,3,4,5,6]
const sumEvenNumber = (arr) =>{
     return arr.reduce((acc,value)=>{
        if(value % 2 === 0 ){
            console.log(acc);
            return acc + value
        }
        return acc
    },0)
}

const result = sumEvenNumber(arr)
// console.log(result);