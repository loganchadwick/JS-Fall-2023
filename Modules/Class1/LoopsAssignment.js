const products = [
    {name: "Product A", price: 10, quantity: 5},
    {name: "Product B", price: 20, quantity: 3},
    {name: "Product C", price: 15, quantity: 7},
    {name: "Product D", price: 25, quantity: 2},
    {name: "Product E", price: 30, quantity: 4}
];

// 2. Loop through the array using a for loop and print out the name and price of each product.
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name}: $${products[i].price}`);
}

// 3. Use a while loop to find the product with the lowest price
let i = 0;
let lowestPriceProduct = products[0]; // Assuming the first product has the lowest price
while (i < products.length) {
    if (products[i].price < lowestPriceProduct.price) {
        lowestPriceProduct = products[i];
    }
    i++;
}
console.log(`${lowestPriceProduct.name} is cheapest at $${lowestPriceProduct.price}`);

// 4. Use a for of loop to calculate the total value of all products in the array.
let totalValue = 0;
for (const product of products) {
    totalValue += product.price * product.quantity;
}
console.log(`Total value of all products: $${totalValue}`);

// 5. Use a for in loop to print out all the properties of each product in the array.
for (let property in products) {
    console.log(property, products[property]);
}

// 6. Create a program that prints the numbers from 1 to 100, but replaces multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}