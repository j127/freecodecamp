// Take a 2-element array and return an ascending range
let ascendingRange = function (arr) {
    let from, to,
        range = [];

    // Make sure that it's lowest to highest
    arr[0] < arr[1] ? [from, to] = arr : [from, to] = arr.reverse();
    for (let i = from; i <= to; i++) {
        range.push(i);
    }
    return range;
};

// From the pseudocode here: https://en.wikipedia.org/wiki/Primality_test#Pseudocode
let isPrime = function (num) {
    let i = 5;

    if (num <= 1) {
        return false;
    } else if (num <= 3) {
        return true;
    } else if ((num % 2 === 0) || (num % 3 === 0)) {
        return false;
    }

    while (i * i <= num) {
        if ((num % i === 0) || (num % (i + 2) === 0)) {
            return false;
        }
        i += 6;
    }

    return true;
};

// Return an array of prime factors for num
let getPrimeFactors = function (num) {
    let factors = [];
    if (num < 2) {
        return [];
    }
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    return factors;
};

// Multiply all the elements of a given array
let multiplyArr = function (arr) {
    let product = arr.reduce(function (a, b) {
        return a * b;
    });
    return product;
};

// Take an array of arrays and return a flattened version
let flattenArray = function (arr) {
    [].concat.apply([], arr);
}

// Usage `arr.filter(onlyUnique)`
var onlyUnique = function (value, index, self) {
    return self.indexOf(value) === index;
}

let smallestCommons = function (arr) {
    let multiples = ascendingRange(arr);

    // Find prime factors of all numbers in range
    let primeFactors = [];
    multiples.forEach(function (n) {
        let pf = getPrimeFactors(n);
        if (pf.length > 0) {
            primeFactors.push(pf);
        }
    });

    // Filter to a unique list
    let flattenedPrimeFactors = [].concat.apply([], primeFactors);
    let uniqPrimeFactors = flattenedPrimeFactors.filter(onlyUnique);

    // Find the largest amounts of each prime factor

    // TODO: replace this with dynamic array
    let finalPrimeFactors = [2, 3, 5, 7, 11, 13]
    // Multiply the prime factors for the answer
    return multiplyArr(finalPrimeFactors);
};

let main = function () {
    let answer = smallestCommons([1, 13]);
    let el = document.getElementById('outputArea');
    el.innerText = answer;
};

main();
