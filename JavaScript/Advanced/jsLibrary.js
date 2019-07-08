var _ = {
    map: function(arr, map) {
      var arr2 = [];
      for(var i = 0; i < arr.length; i ++){
          arr2.push(map(arr[i]));
      }
      return arr2;
    },
    reduce: function(arr, reduce, memo) { 
        if(!memo){
            memo = arr[0];
        }
        temp = 0;
        for(var i = 0; i < arr.length; i++){
            temp = reduce(temp, arr[i]);
        }
        return temp;
    },
    find: function(arr, find) {
        var arr2 = [];
        for(var i = 0; i < arr.length; i ++){
            if(find(arr[i])){
                return arr[i];
            }
        }
    },
    filter: function(arr, filter) { 
        var arr2 = [];
        for(var i = 0; i < arr.length; i++){
            if(filter(arr[i])){
                arr2.push(arr[i]);
            }
            return arr2;
        }
    },
    reject: function(arr, reject) { 
      var arr2 = [];
      for(var i = 0; i < arr.length; i++){
          if(!reject(arr[i])){
              arr2.push(arr[i]);
          }
      }
      return arr2;
    }
  }
 
  var map = _.map([1,2,3,4,5,6], function(num){
      return num * 3;
  });
  var reduce = _.reduce([1,2,3,4,5,6], function(memo, num){
      return num + memo;

  }, 0);
  var find = _.find([1,2,3,4,5,6], function(num){
      return num % 2 == 0;
  });
  var filter = _.filter([1,2,3,4,5,6], function(num){
      return num % 2  == 0;
  });
  var reject = _.reject([1,2,3,4,5,6], function(num){
      return num % 2 == 0;
  })