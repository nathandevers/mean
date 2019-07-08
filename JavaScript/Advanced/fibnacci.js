function fib() {
    // Some variables here
    var first = 0;
    var second = 1;
    var sum = 1;
    function nacci() {
      // do something to those variables here
      console.log(sum);
      sum = first + second;
      first = second;
      second = sum;
    }
    return nacci
  }
  var fibCounter = fib();
  for(var x = 0; x < 8; x++ ){
    fibCounter();
  }
  //fibCounter() // should console.log "1"
  //fibCounter() // should console.log "1"
  //fibCounter() // should console.log "2"
  //fibCounter() // should console.log "3"
  //fibCounter() // should console.log "5"
  //fibCounter() // should console.log "8"
  //fibCounter() // should console.log "13"
  //fibCounter() // should console.log "21"