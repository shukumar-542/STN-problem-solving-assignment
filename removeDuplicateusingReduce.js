const num = [1,2,3,4,5,61,2,2,3,4]

const uniqueArr = num.reduce((acc,value)=> {
   if(!acc.includes(value)){
    acc.push(value)
   }
   return acc
},[])
console.log(uniqueArr);
