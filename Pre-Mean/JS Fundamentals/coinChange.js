//Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

//Example: coinChange(312) returns 

//{dollars: 3, dimes: 1, pennies: 2}
//Example: coinChange(78) returns 

//{quarters: 3, pennies: 3}
//BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.

//Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns

//{dollars: 3, quarters: 2, nickels: 1}

function coinChange(num){
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;
    if(num > 100){
      dollars = Math.floor(num/100);
      num = num % 100; 
    }
    if(num >= 25){
      quarters = Math.floor(num/25);
      num = num % 25;
    }
    if(num >= 10){
      dimes = Math.floor(num/10);
      num = num % 10;
    }
    if(num >= 5){
      nickels = Math.floor(num/5);
      num = num % 5;
    }
    if(num < 5){
      pennies = Math.floor(num/1);
      num = num % 1;
    }
    return "dollars:" + ' ' + dollars + ' ' + 'quarters:' + ' ' + quarters + ' ' + 'dimes' + ' ' + dimes + ' ' + 'nickels:' + ' ' + nickels + ' ' + 'pennies:' + ' ' + pennies;
  }
  
  coinChange(1689);