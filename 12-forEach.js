
let company = [11,12,14,15];
let shop = [
    {name:"Rahul",class:7},
    {name:"Ajay",class:7},
    {name:"Vijay",class:7},
    {name:"Sane",class:7},
    {name:"Aman",class:7},
]

// print the both of the array
console.log(company);
console.log(shop);

// Task - 01 Simple for loop 

for(let i = 0; i<company.length;i++){
    console.log(company[i]);
}

for(let i = 0; i<shop.length; i++){
    console.log(shop[i].name);
    console.log(shop[i].class);
}


// Task - 02 ForEach (High order function)

let arr = [11,12,13,14,5];

arr.forEach((value,index)=>{
    console.log(value,index);
})
