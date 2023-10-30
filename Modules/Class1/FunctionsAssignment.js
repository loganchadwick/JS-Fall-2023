function sumNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function adultsOnly(people) {
    let adults = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].age > 18) {
            adults.push(people[i]);
        }
    }
    return adults;
}

function evenNumbers(numbers) {
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evens.push(numbers[i]);
        }
    }
    return evens;
}

function stringsStartingWithA(strings) {
    let aStrings = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i][0] === 'A') {
            aStrings.push(strings[i]);
        }
    }
    return aStrings;
}

function booksFrom2000OrLater(books) {
    let recentBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].published >= 2000) {
            recentBooks.push(books[i].title);
        }
    }
    return recentBooks;
}

function largerNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function smallestNumber(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

function longestString(strings) {
    let longest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

function studentsWithA(students) {
    let aStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade === 'A') {
            aStudents.push(students[i]);
        }
    }
    return aStudents;
}
