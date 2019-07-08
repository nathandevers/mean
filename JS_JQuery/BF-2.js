//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function a(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
            arr[x] = 'big';
        }
    }
    return arr;
}

a([-1, 1, 2, -5]);


//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function b(arr) {
    var min = 0;
    var max = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
        if (arr[x] < min) {
            min = arr[x];
        }
    }
    console.log(min);
    return max;
}

b([-3, 2, 3, 4]);



//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function c(arr) {
    console.log(arr[arr.length - 2]);
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] % 2 !== 0) {
            return arr[x];
        }
    }
}
c([2, 4, 6, 8, 10, 3, 4, 6]);


//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function d(arr) {
    var newarr = [];
    for (var x = 0; x < arr.length; x++) {
        var temp = arr[x] * 2;
        newarr.push(temp);
    }
    return newarr;
}

d([1, 2, 3]);


//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function e(arr) {
    var count = 0
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
            count++
        }
        arr.pop();
        arr.push(count);
    }

    return arr
}

e([-1, 1, 1, 1]);

//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function f(arr) {
    var evencount = 0;
    var oddcount = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] % 2 == 0) {
            evencount++;
            oddcount = 0;
            if (evencount == 3) {
                console.log("even more so");
            }

        }
        else {
            oddcount++;
            evencount = 0;
            if (oddcount == 3) {
                console.log('thats odd');
            }
        }
    }
}

f([1, 1, 1, 2, 1, 1, 1, 2, 3, 4, 4, 4]);



//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function g(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] % 2 !== 0) {
            arr[x] = arr[x] + 1;
            console.log(arr[x]);
        }
    }
    return arr;

}
g([1, 2, 3, 4]);


//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function h(arr) {
    for (var x = arr.length; x >= 1; x--) {
        arr[x] = arr[x - 1].length;
    }
    arr.pop();
    return arr;
}

h(["hello", "dojo", "awesome"]);



//Add Seven to Most - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function i(arr) {
    var newarr = [];
    for (var x = 0; x < arr.length; x++) {
        newarr[x] = arr[x] + 7;
    }
    console.log(arr);
    return newarr;
}

i([1, 2, 3]);


//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).


function j(arr) {
    for (var x = 0; x < arr.length; x++) {
        arr.reverse();
    }
    return arr;
}

j([3, 1, 6, 4, 2]);


//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].


function k(arr) {
    var newarr = [];
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > 0) {
            newarr[x] = arr[x] * -1;
        }
        else {
            newarr[x] = arr[x];
        }
    }
    console.log(arr);
    return newarr;
}

k([1, -3, 5]);


//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.


function m(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] == 'food') {
            console.log('yummy');
        }
    }
    return 'Im hungry';
}

m([1, 'dog']);


//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.


function n(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    var temp2 = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2;
    return arr;
}

n([1, 2, 3, 4, 5, 6]);


//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function o(arr, num) {
    for (var x = 0; x < arr.length; x++) {
        arr[x] = arr[x] * num;
    }
    return arr;
}

o([1, 2, 3], 3);
