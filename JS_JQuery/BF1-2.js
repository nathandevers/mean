//Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function a() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}

a();


//Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function b() {
    for (var x = 1; x < 1001; x++) {
        if (x % 2 === 0) {
            console.log(x);
        }
    }
}
b();

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function c() {
    var sum = 0
    for (var x = 0; x < 5000; x++) {
        if (x % 2 !== 0) {
            sum += x;
        }
    }
    return sum;
}

c();


//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function d(arr) {
    var sum = 0;
    for (var x = 0; x < arr.length; x++) {
        sum += arr[x];

    }
    return sum;
}

d([1, 2, 5]);



//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function e(arr) {
    var max = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    return max;
}

e([1, 9, 4, 9]);


//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function f(arr) {
    var sum = 0;
    var avg = 0;
    for (var x = 0; x < arr.length; x++) {
        sum += arr[x];
    }
    avg = sum / arr.length;
    return avg;
}

f([1, 3, 5, 7, 20]);



//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function g(arr) {
    var arr = [];
    for (var x = 0; x < 50; x++) {
        if (x % 2 !== 0) {
            arr.push(x);
        }
    }
    return arr;
}

g();


//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function h(y) {
    var arr = [1, 3, 5, 7];
    var count = 0
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > y) {
            count++;
        }
    }
    return count;
}

h(3);


//Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function i(arr) {
    for (var x = 0; x < arr.length; x++) {
        arr[x] = arr[x] * arr[x];
    }
    return arr;
}

i([1, 5, 10, -2]);



//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function j(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            arr[x] = 0;
        }
    }
    return arr;
}

j([1, 5, 10, -2]);


//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function k(arr) {
    var newarr = [];
    var max = 0;
    var min = 0;
    var sum = 0
    var avg = 0;
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
        if (arr[x] < min) {
            min = arr[x];
        }
        sum += arr[x];
        avg = sum / arr.length
    }
    newarr = [max, min, avg];
    return newarr;
}

k([1, 5, 10, -2]);


//Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function l(arr) {
    for (var x = 0; x < arr.length; x++) {
        var temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    }
    return arr;
}

l([-2, 5, 10, 1]);


//Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function m(arr) {
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            arr[x] = 'Dojo';
        }
    }
    return arr;
}

m([-1, -3, 2]);