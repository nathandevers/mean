//Sigma - Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function a(num) {
    var sum = 0;
    for (var x = 0; x <= num; x++) {
        sum += x;
    }
    return sum;
}

a(3);


//Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function b(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;

}

b(5);

//Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function c(x) {
    var sum1 = 1;
    var sum2 = 0;
    var temp = 0
    for (var i = x; i > 0; i--) {
        var temp = sum1;
        sum1 += sum2;
        sum2 = temp;
    }
    return sum2;
}

c(7);




//Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function d(arr) {
    for (var x = 0; x < arr.length; x++) {
        return arr[arr.length - 2];
    }
}

d([42, true, 4, "Liam", 7]);



//Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.


function e(arr, index) {
    for (var x = index; x < arr.length; x++) {
        return arr[index + 1];
    }
}

e([5, 2, 3, 6, 4, 9, 7], 3);



//Array: Second-Largest: Return the second-largest element of an array. Given ,[42,1,4,3.14,7], return 7. return 7.  If the array is too short, return null.

function f(arr) {
    var max1 = arr[1];
    var max2 = arr[0];
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] > max1) {
            max2 = max1;
            max1 = arr[x];
        } else if (arr[x] > max2) {
            max2 = arr[x];
        }

    }
    return max2;
}

f([42, 1, 4, 3.14, 7]);



//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function g(myArr) {
    var newArr = [];
    for (x in myArr) {
        newArr.push(myArr[x]);
        newArr.push(myArr[x]);
    }
    return newArr;
}
g([4, "Ulysses", 42, false]);
