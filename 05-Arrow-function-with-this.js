
/* Task - 1 Basic code
const shop = {
    price : 120,
    buy(){
        console.log(this.price);
    }
}

shop.buy();
*/


// Task01 - wihtout using Arrow Function 

const buttondata = document.getElementById("btn");
console.log(buttondata);

const costumer = {
    price : 1110,
    buy: function(){
        buttondata.addEventListener("click",function(){
            console.log("click button costumer wala!")
        });
    }
}

costumer.buy();

console.log(" ");


// Task02 - with help of Arrow Function
const buttonvalue = document.getElementById("btn");

const shop = {
    price : 1110,
    buy(){
        buttonvalue.addEventListener("click",() => {
            console.log("click button shop wala!")
            console.log(this.price);
        });
    }
}
shop.buy();