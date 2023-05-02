
let shop = [
    {name:"Rahul",class:7},
    {name:"Ajay",class:7},
    {name:"Vijay",class:7},
    {name:"Sane",class:7},
    {name:"Aman",class:7},
]

// used to fetch data 
shop.map((value,index)=>{
    console.log(`name is ${value.name} + class : ${value.class}`);
})