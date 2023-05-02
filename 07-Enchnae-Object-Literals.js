// create simple object - (key and value)

const studentManagement ={
    name : "Alex",
    grade : 90,
    city : "Nagpur"
}

console.error(studentManagement.name);
console.error(studentManagement.grade);
console.error(studentManagement.city);


// Enchance Object Literals

const student_name = "Rohan";

const studentCard = {
    [student_name] : "Alex",
    grade : 90, 
    city : "Nagpur"
}

console.error(studentCard.student_name);
console.error(studentCard.grade);
console.error(studentCard.city);
