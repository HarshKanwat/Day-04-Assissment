function printOddNumbers(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);
 
    oddNumbers.forEach(num => console.log(num));
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(array);
//output 1,3,5,7,9

//Q2
let stringArray = ["hello world", "good morning", "have a nice day"];
let titleCasedArray = convertToTitleCase(stringArray);


const titleCase = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
};

const convertToTitleCase = (a) => {
    return a.map(titleCase);
};
console.log(titleCasedArray);
//output
//[ 'Hello World', 'Good Morning', 'Have A Nice Day' ]

//Q3
const sumArray = (arr) => arr.reduce((total, num) => total + num, 0);
let array = [1, 2, 3, 4, 5];
let sum = sumArray(array);
console.log("Sum:", sum); 
// Output: Sum: 15

//Q4
const isPalindrome = (str) => {
    let cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
};
const findPalindromes = (arr) => {
    return arr.filter(word => isPalindrome(word));
};
let array = ["madam", "racecar", "hello", "level", "stats", "algorithm"];
let palindromes = findPalindromes(array);
console.log("Palindromes:", palindromes); 
// Output: Palindromes: [ 'madam', 'racecar', 'level', 'stats' ]



