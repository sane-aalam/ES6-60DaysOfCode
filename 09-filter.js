
/*

This ability of functions to act as first-class functions is what powers higher order functions in JavaScript.

Basically, a function which takes another function as an argument or returns a function is known as a higher order function.

*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const temp = [];

for(let index = 0; index<arr.length; index++){
    if(arr[index] > 5){
        temp.push(arr[index]);
    }
}

console.log(temp);

// Filter Method with arrow function 
let ans = arr.filter((value,index)=>{
    return value <= 5;
})

console.log(ans);





