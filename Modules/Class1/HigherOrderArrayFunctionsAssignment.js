function getBookTitles(books) {
    let titles = [];
    for (let book of books) {
        titles.push(book.title);
    }
    return titles;
}

function inStockProducts(products) {
    let inStock = [];
    for (let product of products) {
        if (product.inStock) { 
            inStock.push(product);
        }
    }
    return inStock;
}

function findUserByEmail(users, email) {
    for (let user of users) {
        if (user.email === email) {
            return user;
        }
    }
    return null;
}

function areAllTasksComplete(tasks) {
    for (let task of tasks) {
        if (!task.isComplete) { // Assuming 'isComplete' is a boolean property
            return false;
        }
    }
    return true;
}

function totalSpent(purchases) {
    let total = 0;
    for (let purchase of purchases) {
        total += purchase.amount; // Assuming 'amount' contains the price of each purchase
    }
    return total;
}

function sumNumbers(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

function toUpperCase(strings) {
    let upperCaseStrings = [];
    for (let str of strings) {
        upperCaseStrings.push(str.toUpperCase());
    }
    return upperCaseStrings;
}

function getEvenNumbers(numbers) {
    let evens = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evens.push(number);
        }
    }
    return evens;
}

function shortStrings(strings) {
    let shorties = [];
    for (let str of strings) {
        if (str.length <= 4) {
            shorties.push(str);
        }
    }
    return shorties;
}
