
// Task - 01 Var Keyword

var nameofStudent = "Rahul Mehra";
console.error(nameofStudent);
var nameofStudent = "Karan Kumar";
console.error(nameofStudent);

// it will work(fine) - using var keyword,you can define same variable name 

// Task - 03 Let keyword

let EducationLevel = "BTech";
console.log(EducationLevel);
let EducationLevel = "BA";
console.log(EducationLevel);

// it give - Error - using let keyword, you can define same-name variable

/*SyntaxError: Identifier 'EducationLevel' has already been declared
*/

// Task - 03 Var Keyword - functional scope 

var CopyPageNumber = 11;
console.log(CopyPageNumber,"before going to the block of the code")

if(true){
   var CopyPageNumber = 111;
    console.log(CopyPageNumber);
}

console.log(CopyPageNumber);


// Task - 04 Let Keyword - Block scope (Not change)

let cityNumber = 11;
console.log(`Before going to the block of the code -> ${cityNumber}`)

if(true){
    let cityNumber = 111;
    // change the value of the city Number 
    console.log(`inside block of the code -> ${cityNumber}`)
}

console.log(`after the block of the code -> ${cityNumber}`)

// Task - 05 Functional Scope with var keyword

function addTwoNumber(){
  var firstName = "Sane";
  var lastName = "Aalam";
}

console.log(firstName);
console.log(lastName);

// Task - 06 Functon Scope with let keyword

function addTwoNumber(){
    let firstName = "Sane";
    let lastName = "Aalam";
  }
  
  console.log(firstName);
  console.log(lastName);