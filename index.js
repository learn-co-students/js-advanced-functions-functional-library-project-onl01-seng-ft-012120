const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, fun) {
      for (let i = 0; i < Object.entries(coll).length; i++) {
        fun(Object.entries(coll)[i][1], Object.entries(coll)[i][0], coll)
      }
      return coll
    },

    map: function(coll, fun) {
      let newColl = []
      for (let i = 0; i < Object.entries(coll).length; i++) {
        newColl.push(fun(Object.entries(coll)[i][1], Object.entries(coll)[i][0], coll))
      }
      return newColl 
    },

    reduce: function(coll, fun, acc) {
      let memo
      let i
      if (acc) {
        memo = acc 
        i = 0
      } else {
        memo = Object.entries(coll)[0][1]
        i = 1
      }
      
      for (i; i < Object.entries(coll).length; i++) {
        memo = fun(memo, Object.entries(coll)[i][1], coll)
      }
      return memo 
    },

    find: function(coll, predicate) { 
      for (let i = 0; i < Object.entries(coll).length; i++) {
        if (predicate(coll[i])) {
          return coll[i]
        } 
      }

    },

    filter: function(coll, predicate) { 
      let results = []
      for (let i = 0; i < Object.entries(coll).length; i++) {
        if (predicate(coll[i])) {
          results.push(coll[i])
        } 
      }
      return results 
    },

    size: function(coll) {
      return Object.entries(coll).length
    },

    first: function(coll, n = 0) {
      if (n === 0) {
        return coll[0]
      } else {
        return coll.slice(0, n)
      }
    },

    last: function(coll, n = -1) {
      if (n === -1) {
        return coll[coll.length - 1]
      } else {
        return coll.slice(n * -1)
      }
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let sortedArray = [...array]
        return sortedArray.sort(function(a, b) {
          return callback(a) - callback(b)
        })
    },
    flatten: function(array, shallow) {
      let condition = false 
      while (condition === false ) {
        array = array.flat()
        if (shallow) {
          condition = true 
        } else {
          if (array.some(e => Array.isArray(e))){
            condition = false 
          } else {
            condition = true  
          }
        }
      }
      return array 
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
