const number = [20,2,4,5,6,8,15]
const findMaxValue = (num) =>{
    let maxValue = 0
    for(let i = 0 ; i <num.length ; i++){
        if(maxValue < num[i]){
            maxValue = num[i]
        }
    }
    return maxValue
}

const result = findMaxValue(number);
console.log(result);