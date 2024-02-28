
// function combine(a,b,c){
//     return a*b/c;
// }

// console.log(combine(13,16,46));

// const combine = (a.b,c) => {
//     return a * b / c;
// }

// const result = combine(100, 2, 100);

const cart = [
    { productName: "T-shirt", price: 20 },
    { productName: "Jeans", price: 50 },
    { productName: "Sneakers", price: 80 },
    { productName: "Mask", price: 40 },
    { productName: "Dress", price: 90 },
]; 

const calculateTotalPrice = (cart) => {
    let totalPrice = 0;
    for(let product of cart){
        totalPrice += product.price
    }

    return totalPrice; 
}

const totalPrice = calculateTotalPrice(cart);
console.log("The total price is: " + totalPrice);






