let number = 10;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

let age = 24;
if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age <= 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}

let letter = 'e';
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    console.log(`${letter} is a vowel.`);
} else {
    console.log(`${letter} is a consonant.`);
}

let numberOne = 30;
let numberTwo = 15;
let numberThree = 45;
if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(`The largest number is: ${numberOne}`);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log(`The largest number is: ${numberTwo}`);
} else {
    console.log(`The largest number is: ${numberThree}`);
}

let password = 'Test1233';

// Check if the password length is less than 8 characters
if (password.length < 8) {
    console.log("Password too short");
}
// Check if the password contains both letters and numbers using regular expressions
else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
    console.log("Password accepted");
}
// If the password does not meet the above conditions
else {
    console.log("Password rejected");
}
