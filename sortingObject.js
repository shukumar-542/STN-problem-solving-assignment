const cars = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2020
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2018
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2019
    },
    {
        make: "Chevrolet",
        model: "Malibu",
        year: 2017
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2021
    }
];


const sortByYear = (cars)=>{
    return cars.sort((a,b) => a.year  - b.year)

}

const result = sortByYear(cars)
console.log(result);
