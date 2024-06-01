const missingNumber = (number)=>{
    for(let i = 0 ; i < number.length - 1; i++){
        if(number[i] + 1 !== number[i+1] ){
            console.log(number[i] + 1);
        }
    }
}

missingNumber([1,2,3,4,5])