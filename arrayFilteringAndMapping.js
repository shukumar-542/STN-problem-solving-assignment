const persons = [
    {
        name: "Alice Johnson",
        age: 28,
        gender: "Female"
    },
    {
        name: "Bob Smith",
        age: 34,
        gender: "Male"
    },
    {
        name: "Catherine Lee",
        age: 25,
        gender: "Female"
    },
    {
        name: "David Brown",
        age: 45,
        gender: "Male"
    },
    {
        name: "Evelyn Garcia",
        age: 30,
        gender: "Female"
    }
];


const FindingMale = (persons)=>{
    const males = persons.filter(person => person.gender === 'Male')
    const name = males.map(male => male.name)
    return name

}

const result = FindingMale(persons)
console.log(result);
