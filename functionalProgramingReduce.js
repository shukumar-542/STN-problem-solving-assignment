const products = [
    {quantity : 4, price : 10},
    {quantity : 3, price : 20},
    {quantity : 1, price : 50},
    {quantity : 6, price : 5},
]
const init = 0
const calculateTotalValue = (products)=>{
   const result = products.reduce((acc, item)=>{
        return acc+(item.quantity * item.price);
    }, 0)
    console.log(result);

}
 calculateTotalValue(products);
// console.log(result);