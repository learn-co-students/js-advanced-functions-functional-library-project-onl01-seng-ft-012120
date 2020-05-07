const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let i in collection){
        callback(collection[i], i, collection)
      }
        return collection
    },

    map: function(collection, callback) {
      let result = []
      for(let i in collection) {
        result.push(callback(collection[i], i, collection))
      }
      return result

    },

    reduce: function(collection, callback, acc) {
      for(let i of collection) {
        if (acc){
        acc = callback(acc, i, collection)
        }else {
        acc = i
        }
      }
        return acc
    },
    
      find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){return collection[i]};
      }
    },
    
    filter: function(collection, predicate) {
      let arr =[]
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){arr.push(collection[i])};
      }
      return arr
    },
    
    size: function(collection) {
      let counter = 0
      for (let i in collection) {
        counter++
      }
      return counter
    },
    
    first: function(collection, n = 1) {
      let result = []
      if (n > 1){
      for (let i = 0; i <= n-1; i++) {
      result.push(collection[i])
      }
      return result
      } else {
      return collection[0]
      }
    }, 
    
    last: function(collection, n = 1){
      if (n > 1) {
        return collection.slice(collection.length - n)
      } else {
        return collection[collection.length - 1]
      }
      }, 
      
    compact: function(collection) {
      let arr = []
      for (let i of collection) {
        if (!!i) {
          arr.push(i)
        }
      }
      return arr
    }, 
    
    sortBy: function(collection, callBack) {
       let copy = collection.map(x => x);
      function compare(a, b) {
        if (callBack(a) < callBack(b)) { return -1; };
        if (callBack(a) > callBack(b)) { return 1; };
        return 0;
      };
      return copy.sort(compare);
    }, 
    
    flatten: function(collection, shallow) {
      let result = []
      for (let i of collection) {
        if (Array.isArray(i)){
          shallow ? result = result.concat(i) : result = result.concat(fi.flatten(i))
        }else {
          result.push(i)
        }
      }
      return result
    }, 
    
    uniq: function(array, isSorted, callBack) {
      let obj = {}
      let result = []
      for (let i of array){
        if (callBack){
          if (obj[callBack(i)] !== 1){
            result.push(i)
            obj[callBack(i)] = 1
          }
        } else{
          if (!result.includes(i)) { 
            result.push(i)
          };
          // if (!(obj[i] === 1)){
          //   result.push(i)
          //   obj[i] = 1
            
          // } else {
            
          
        } 
      }
     console.log(result)
     return result
    }, 
    
    keys: function(object){
      let result = []
      for (let keys in object) {
        result.push(keys)
      }
      return result
    },
    
    values: function(object){
      let result = []
      for (let keys in object) {
        result.push(object[keys])
      }
      return result
    },
    functions: function(object) {
      let result = []
      for (let key in object) {
        if (typeof object[key] === 'function'){
          result.push(object[key])
        }
      }
      return result.sort()
  
    },


  }
})()

fi.libraryMethod()
