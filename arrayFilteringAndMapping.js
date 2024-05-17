const persons = [
    {
        name: "Henry lucy",
        age: 28,
        gender: "Female"
    },
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
];


const FindingMale = (persons)=>{
    const males = persons.filter(person => person.gender === 'Male')
    const name = males.map(male => male.name)
    return name

}

const result = FindingMale(persons)
console.log(result);
