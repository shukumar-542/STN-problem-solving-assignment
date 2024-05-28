const peoples = [
   
    {
        name: "John Smith",
        age: 34,
        gender: "Male"
    },
    {
        name: "Chris Lee",
        age: 25,
        gender: "Female"
    },
    {
        name: "David Warner",
        age: 45,
        gender: "Male"
    },
    {
        name: "Eve Garcia",
        age: 30,
        gender: "Female"
    }
]

const FindAndUpdateAge = (name, newAge)=>{
    const findPeople = peoples.find(person => person.name === name);
    if(findPeople){
        findPeople.age = newAge
    }
    
}
 FindAndUpdateAge('Eve Garcia' , 20);
console.log(peoples);