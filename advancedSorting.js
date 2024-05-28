const students = [
    { "name": "Alice", "grades": [85, 90, 88] },
    { "name": "Bob", "grades": [70, 75, 80] },
    { "name": "Carol", "grades": [95, 92, 93] },
    { "name": "Dave", "grades": [60, 65, 70] },
    { "name": "Eve", "grades": [88, 89, 92] }
]

const sortByGrade = (students) =>{
     const studentGrades =  students.map(student => {
       const res =  student.grades.reduce((sum, value)=> sum + value, 0)
       
       return {"name": student.name, "totalGrade" : res }
    })
    
    const ascendingStudent = studentGrades.sort((a,b)=> a.totalGrade - b.totalGrade)
    return ascendingStudent
}
const result=  sortByGrade(students)
console.log(result);