// Take a 2-element array and return an ascending range
let ascendingRange = (arr) => {
    let from, to,
        range = [];

    // Make sure that it's lowest to highest
    arr[0] < arr[1] ? [from, to] = arr : [from, to] = arr.reverse();
    for (let i = from; i <= to; i++) {
        range.push(i);
    }
    return range;
};

// Return an array of prime factors for num
let getPrimeFactors = (num) => {
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
let multiplyArr = (arr) => {
    let product = arr.reduce((a, b) => {
        return a * b;
    });
    return product;
};

// Usage `arr.filter(onlyUnique)`
let onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
}

// Return how many times thing is in arr
let countItemsInArray = (thing, arr) => {
    count = 0;
    arr.forEach((i) => {
        if (i === thing) {
            count += 1;
        }
    });
    return count;
};

let smallestCommons = (arr) => {
    let multiples = ascendingRange(arr);

    // Find prime factors of all numbers in range
    let primeFactors = [];
    multiples.forEach((n) => {
        let pf = getPrimeFactors(n);
        if (pf.length > 0) {
            primeFactors.push(pf);
        }
    });

    // Filter to a unique list
    let flattenedPrimeFactors = [].concat.apply([], primeFactors);
    let uniqPrimeFactors = flattenedPrimeFactors.filter(onlyUnique);
    console.log(primeFactors);
    // Find the largest amounts of each prime factor
    let d = {};
    uniqPrimeFactors.forEach((n) => {
        console.log('n', n);
        d[n] = 0;
        // Loop over primeFactors.
        // Count the number of times `n` occurs in that group of prime factors
        primeFactors.forEach((a) => {
            let c = countItemsInArray(n, a);
            if ((d[n] !== undefined) && (d[n] < c)) {
                d[n] = c;
            }
        });
    });

    console.log(d);
    let finalPrimeFactors = []
    Object.keys(d).forEach((k) => {
        for (let i = 0, iLen = d[k]; i < iLen; i++) {
            finalPrimeFactors.push(k);
        }
    });

    console.log('fpf', finalPrimeFactors);
    // Multiply the prime factors for the answer
    return multiplyArr(finalPrimeFactors);
};


// Do stuff to the DOM
let main = () => {
    let answer = smallestCommons([1, 13]);
    let el = document.getElementById('outputArea');
    el.innerText = answer;
};

main();
