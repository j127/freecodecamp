// Return an array with the specified range
var range = function (start, end) {
    var i, arr = [];
    for (i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};

// Multiply all the elements of a given array
var multiplyArr = function (arr) {
    var product = arr.reduce(function (a, b) {
        return a * b;
    });
    return product;
};

// Test a target number. Return false if not divisible by every element of the array
var testCurrentTarget = function (target, arr) {
    console.log('running testCurrentTarget with: ', target + ' & ' + arr);
    for (var i = arr[arr.length-1]; i >= arr[0]; i--) {
        console.log(`i is ${i}. The target is ${target}. Checking if ${target} % ${i} is true or false`);
        if (target % i !== 0) {
            console.log('about to return false');
            return false;
        }
    }
    console.log('about to return true');
    return true;
};

var smallestCommons = function (a) {
    // create an array with the appropriate range
    arrMax = Math.max(a[0], a[1]);
    arrMin = Math.min(a[0], a[1]);
    var r = range(arrMin, arrMax);
    console.log('r', r);
    var total = multiplyArr(r);
    //var total = arrMax * arrMin;
    var i, currentTarget;

    // Outer loop goes backwards
    for (i = arrMax; i >= arrMin; i--) {
        currentTarget = total / i;
        console.log(`About to check ${total}/${i}, which is ${currentTarget}`);
        if (testCurrentTarget(currentTarget, r)) {
            return currentTarget;
        }
        console.log('-------');
    }
};
var answer = smallestCommons([1, 6]);
var el = document.getElementById('outputArea');
el.innerText = answer;
//smallestCommons([1, 5]);
