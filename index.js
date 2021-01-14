const pricesArray = [
    {id: 1, price: 23},
    {id: 2, price: 77},
    {id: 3, price: 46},
    {id: 4, price: 144},
    {id: 5, price: 165},
    {id: 6, price: 20},
    {id: 7, price: 16},
    {id: 8, price: 26},
]

//Calculate the total amount without using reduce
let totalPrice = 0;

for (let p of pricesArray){
    totalPrice += p.price
}

console.log(totalPrice);


//Calculate the total amount with reduce

let totalPriceNew = pricesArray.reduce(
    (acc, cur)=>{
        //Let's print each value of the current element and the total at the same time
        console.log("Total value is:", acc, "Current value is:", cur.price)

        return acc += cur.price
    }
    ,0
)

console.log(totalPriceNew)


//Use all 4 positional arguments to do something more advance
let average = pricesArray.reduce(
    (acc, cur, index, array)=>{
        acc += cur.price
        if(index === array.length-1){
            return acc/array.length
        }else{
            return acc
        }
    }
    ,0
)

console.log(average)