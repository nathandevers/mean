//Max, min, and average
//Objectives:

//Iterate over an array
//Construct a string
//Use the return statement
//Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

//Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."


function maxMinAvg(arr){
    var max = 0;
    var min = 0;
    var sum = 0
    var str = "";
    for(var x = 0; x < arr.length; x++){
      if(arr[x] > max){
        max = arr[x];
      }
      if(arr[x] < min){
        min = arr[x];
      }
      sum += arr[x];
    } 
    avg = sum / arr.length;
    return "The minimum is" + " " + min + " " + "the maximum is" + " " + max + " " + "and the average is"+ " " + avg
  }
  maxMinAvg([1,-2,9,4]);