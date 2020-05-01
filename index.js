const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, fn) {
      for (let x = 0; x < Object.keys(obj).length; x++) {
        fn(Object.values(obj)[x]);
      }
      return obj;
    },

    map: function(obj, fn) {
      let newArray =[];
      for (let x = 0; x < Object.entries(obj).length; x++) {
        newArray.push(fn(Object.entries(obj)[x][1]));
      }
      return newArray;
    },

    reduce: function(obj, fn, val) {
      let y;
      let x;
      if (val) {
        y = val;
        x = 0;
      } else {
        console.log("yes");
        y = Object.entries(obj)[0][1];
        x = 1;
      }
      for(; x < Object.entries(obj).length; x++) {
        y = fn(y, Object.entries(obj)[x][1], obj);
      }
      return y;
    },

    find: function(obj, fn) {
      for(let x = 0; x < Object.entries(obj).length; x++) {
        if (fn(Object.entries(obj)[x][1])) {
          return Object.entries(obj)[x][1];
        }
      }
      return undefined;
    },

    filter: function(obj, fn) {
      let array = [];
      for(let x = 0; x < Object.entries(obj).length; x++) {
        if (fn(Object.entries(obj)[x][1])) {
          array.push(Object.entries(obj)[x][1]);
        }
      }
      return array;
    },

    size: function(obj) {
      return Object.entries(obj).length;
    },

    first: function(obj, x=1) {
      let y = obj.slice(0, x);
      if (y.length === 1) {
        return y[0];
      } else {
        return y;
      }
    },

    last: function(obj, x=1) {
      let y = obj.slice(-x);
      if (y.length === 1) {
        return y[0];
      } else {
        return y;
      }
    },

    compact: function(obj) {
      let array = [];
      for (let x = 0; x < obj.length; x++) {
        if (Boolean(obj[x])) {
          array.push(obj[x]);
        }
      }
      return array;
    },

    sortBy: function(obj, fn) {
      let array = [...obj]
        return array.sort(function(a, b) {
          return fn(a) - fn(b)
        })
    },

    flatten: function(array, shallow=false) {
      if (shallow) {
        return array.flat();
      } else {
        if (array.some(x => Array.isArray(x))) {
          fi.flatten(array.flat(1));
        } else {
          return array;
        }
      }
    },

    uniq: function(array, isSorted, callback) {
      let newArray = []
      newArray.push(array.shift())
      if (typeof callback === "function") {
        const callbackResults = []
        callbackResults.push(callback(newArray[0]))
        array.forEach(function(e){
          if (!callbackResults.includes(callback(e))) {
            callbackResults.push(callback(e))
            newArray.push(e)
          }
        })
      } else {
        array.forEach(function(e) {
          if (!newArray.includes(e)) {
            newArray.push(e)
          }
        })
      }
      console.log(newArray)
      return newArray 
    },

    keys: function(object) {
      return fi.map(object, function(v, k, object ){
        return k
      })
    },

    values: function(object) {
      return fi.map(object, function(v, k, object ){
        return v
      })
    },

    functions: function(object) {
      const filteredObject = Object.entries(object).filter(e => typeof e[1] === "function" )
      const objectKeys = filteredObject.map(e => e[0] )
      return objectKeys.sort()
    }


  }
})()

fi.libraryMethod()
