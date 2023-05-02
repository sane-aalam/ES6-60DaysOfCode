
// Task - 1 
// a) whenver you create variable using var 
// b) you can change the value of the variable 

var dataTree = "binary search Tree";
console.log(dataTree);
dataTree = 11;
console.log(dataTree);

// Task - 2
// a) whenver you create variable using let
// b) you can change the value of the variable 

let TreeDSA = "binary search Tree";
console.log(TreeDSA);
TreeDSA = "AVL Tree";
console.log(TreeDSA);

// Task - 3
// a) whenver you create variable using let
// b) you can change the value of the variable 

const maxtrix = "2D Array";
maxtrix = "1D Array";
console.log(matrix); // Error you can change constant value 


// Task - 04 Const Keyword - Block scope

const cityNumber = 11;
console.log(`Before going to the block of the code -> ${cityNumber}`)

if(true){
    const cityNumber = 111;
    // change the value of the city Number 
    console.log(`inside block of the code -> ${cityNumber}`)
}

console.log(`out of block of the code -> ${cityNumber}`)