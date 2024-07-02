//Q1. 
let a=[11,12,13,14,15,16];
for(i=0;i<a.length;i++){
    if(a[i]%2==1){
        console.log(a[i])
    }
}
// Now this will give us odd number and the answer are (11,13,14,15)
//Q2
let stringArray = ["hello world", "how are you", "js is language"];

let titleCaseArray = stringArray.map(function (str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});

console.log(titleCaseArray);
//Now the answer is Hello World , How Are You , Js Is Language,



//Q3
    var digit = [1, 2, 3, 4, 5];

    var sum = digit.reduce(function (total, current) {
    return total + current;
}, 0);

console.log( sum); // Output: Sum of array: 15

// Q4
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 11];

const primeNumbers = numbers.filter(num => isPrime(num));

console.log(primeNumbers);

//ans   Prime numbers in the array: [2, 3, 5, 7, 11]

// Q5:

function isPalindrome(str) {
  
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return cleanStr === cleanStr.split('').reverse().join('');
}

function findPalindromes(arr) {
    return arr.filter(str => isPalindrome(str));
}

const strings = ["level", "radar", "hello", "madam", "racecar", "world"];
const palindromes = findPalindromes(strings);
console.log(palindromes);

//Palindromes in the array: [ 'level', 'radar', 'madam', 'racecar' ]


//Q6
function findMedianSortedArrays(nums1, nums2) {
    
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    
   
    let N = mergedArray.length;
    if (N % 2 === 0) {
        
        let mid1 = N / 2 - 1;
        let mid2 = N / 2;
        return (mergedArray[mid1] + mergedArray[mid2]) / 2;
    } else {
        
        let mid = Math.floor(N / 2);
        return mergedArray[mid];
    }
}


let nums1 = [1, 3, 5];
let nums2 = [2, 4, 6];

let median = findMedianSortedArrays(nums1, nums2);
console.log("Median:", median);  
// Output: 3.5

//Q7
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = removeDuplicates(array);
console.log(uniqueArray); 
// Output: [1, 2, 3, 4, 5]

//Q8
function rotateArray(arr, k) {
    let n = arr.length;

    k = k % n;
    
    if (k !== 0) {
        let rotatedPart = arr.splice(n - k);
        arr.unshift(...rotatedPart); 
    }
    
    return arr;
}
let z = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArray = rotateArray(z, k);
console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]