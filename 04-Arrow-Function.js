// Noraml Function
function AddTwoNumber(value1,value2){
    return value1 + value2;
}

const sum = AddTwoNumber(11,12);
console.log(sum);

// A shorter ES6 arrow function  

const AddThreeNumber = (val1,val2) => {
    return val1 + val2;
}

console.log(AddThreeNumber(11,123));


// And we can shorten it even further  

const total = (a,b) => a + b;
console.log(total(11,12));
