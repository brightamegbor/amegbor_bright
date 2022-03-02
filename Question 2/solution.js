// first solution
function secondLargest(args) {
    if (typeof args != 'object') return;
    // get the largest of the array
    let largestInArray = Math.max.apply(null, args);

    // get the largest array index
    let largestInArrayIndex = args.indexOf(largestInArray);

    // replace the largest in the array with -infinity
    args[largestInArrayIndex] = -Infinity;

    // get the second largest of the rest
    const secondLargest = Math.max.apply(null, args);

    return secondLargest;
}

// second solution 2
function secondLargest2(args) {
    if (typeof args != 'object') return;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    // find largest
    for (let i = 0; i < args.length; i++) {
        if (args[i] > largest) {
            largest = args[i];
        }
    }

    // find secondLargest
    for (let i = 0; i < args.length; i++) {
        if (args[i] > secondLargest && args[i] < largest) {
            secondLargest = args[i];
        }
    }

    return secondLargest;
}

// call the first solution function and log result
console.log(secondLargest([10, 290, 281, 32, 1, 0, 817]));

// call the second solution function and log result
// uncomment the code below to check second solution
// console.log(secondLargest([10, 290, 281, 32, 1, 0, 817]));
