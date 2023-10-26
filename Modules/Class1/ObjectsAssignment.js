const Employee = {
    name: 'John Doe',
    age: 30,
    salary: 50000,
    jobTitle: 'Product Manager',

    work() {
        console.log(`${this.name} is working.`);
    },

    takeABreak() {
        console.log(`${this.name} is taking a break.`);
    },

    attendMeeting() {
        console.log(`${this.name} is attending a meeting.`);
    }
};

const BankAccount = {
    accountNumber: '123456789',
    balance: 5000,
    accountType: 'Savings',

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}.`);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds.');
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}.`);
    },

    transfer(amount, targetAccount) {
        if (amount > this.balance) {
            console.log('Insufficient funds.');
            return;
        }
        this.balance -= amount;
        targetAccount.balance += amount;
        console.log(`Transferred $${amount} to account ${targetAccount.accountNumber}. New balance: $${this.balance}.`);
    }
};

let Dog = {
    breed: "Golden Retriever",
    age: 5,
    color: "golden",

    bark() {
        console.log("Woof!");
    },

    wagTail() {
        console.log("The dog wags its tail happily.");
    },

    fetch(item) {
        console.log(`The dog fetches the ${item} and brings it back.`);
    }
};

let Product = {
    name: "Laptop",
    price: 1000,
    manufacturer: "Apple",
    category: "Electronics"
};

Product.description = "A good laptop";

Product.price += 10;

delete Product.description;

console.log(Product);

const blogPosts = [
    { 
    title: "The Importance of Regular Exercise", 
    author: "John Doe", 
    date: "2022-02-28", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},
    { 
    title: "Tips for Eating Healthy on a Budget", 
    author: "Jane Smith", 
    date: "2022-02-15", 
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
},
];

const fallbackDate = "2023-10-26";

for (let post of blogPosts) {
    for (let key in post) {
        if (key === "date" && post[key] === "") {
            post[key] = fallbackDate;
        }
    }
}

console.log(blogPosts);
