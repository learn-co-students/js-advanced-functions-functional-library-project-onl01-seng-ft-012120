const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      for (const key in collection){
        callBack(collection[key], key, collection);
      };
      return collection;
    },

    map: function(collection, callBack) {
      const result = [];
      for (const key in collection){
        result.push(callBack(collection[key], key, collection));
      };
      return result;
    },

    reduce: function(collection, callBack, acc) {
      for(let i = 0; i < collection.length; i++)
        if(acc){
          acc = callBack(acc, collection[i], collection);
        }
        else{
          acc = collection[i];
        };
        return acc;
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){return collection[i]};
      }
    },

    filter: function(collection, predicate){
      const result = [];
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){result.push(collection[i])};
      };
      return result;
    },

    size: function(collection){
      let counter = 0;
      for (const key in collection){
        counter++;
      };
      return counter;
    },

    first: function(array, n = 1){
      if (n > 1){
        return array.slice(0, n);
      }
      else {
        return array[0];
      };
    },

    last: function(array, n = 1){
      if (n > 1){
        return array.slice(array.length - n);
      }
      else {
        return array[array.length - 1];
      };
    },

    compact: function(array){
      const result = [];
      for( let i = 0; i < array.length; i++){
        if (array[i]){ result.push(array[i]) };
      };
      return result;
    },

    sortBy: function(array, callBack){
      let copy = array.map(x => x);
      function compare(a, b) {
        if (callBack(a) < callBack(b)) { return -1; };
        if (callBack(a) > callBack(b)) { return 1; };
        return 0;
      };
      return copy.sort(compare);
    },

    flatten: function(array, shallow){
      let result = [];
      for (let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
          shallow ? result = result.concat(array[i]) : result = result.concat(fi.flatten(array[i]));
        }
        else {
          result.push(array[i]);
        };
      };
      return result;
    },

    uniq: function(array, isSorted, callBack){
      const result = [];
      for (let i = 0; i < array.length; i++){
        if (callBack){
          let iteratedResult = result.map(callBack);
          if (!iteratedResult.includes(callBack(array[i]))){ 
            result.push(array[i]) 
          };
        }
        else {
          if (!result.includes(array[i])){ result.push(array[i]) };
        };
      };
      return result;
    },

    keys: function(object){
      const result = [];
      for (const key in object){
        result.push(key.toString());
      };
      return result;
    },

    values: function(object){
      const result = [];
      for (const key in object){
        result.push(object[key]);
      };
      return result;
    },

    functions: function(object){
      const result = [];
      for (const key in object){
        if (typeof object[key] == 'function'){
          result.push(key.toString());
        };
      };
      return result;
    }


  }
})()

fi.libraryMethod()
