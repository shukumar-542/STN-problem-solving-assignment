const FindLeapYear = (year)=>{

        if((year % 4 === 0 && year % 100 !== 0) || year % 4 === 0){
            return `${year} is leap year`
        }else{
            return `${year} is not leap year`
        }
}

const result = FindLeapYear(2028);
console.log(result);
