const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combined = [...numbers1, ...numbers2];
console.log(combined);

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = ["String",...array1,...array2];
console.log(array3);

const originalArray = ["banana", "apple", "cherry"];
const originalObject = {name: "John", age: 30};

// Function to add a key-value pair to an object
function addObjectProperty(obj, key, value) {
    return {...obj, [key]: value};
}

// Example of using the function to add a key-value pair to originalObject
const updatedObject = addObjectProperty(originalObject, "job", "Engineer");
console.log(updatedObject);  // Outputs: {name: "John", age: 30, job: "Engineer"}

const updatedArray = [...originalArray, "grape"];
console.log(updatedArray);

function findLargestNumber(numbers) {
    return Math.max(...numbers);
}

const array = [4, 8, 1, 6, 9, 2];
const largest = findLargestNumber(array);
console.log(largest);

function sortStringsAlphabetically(strings) {
    return strings.sort();
}

const fruits = ["banana", "apple", "cherry"];
const sortedFruits = sortStringsAlphabetically(fruits);
console.log(sortedFruits); 