const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
       let typeOfCollection = null
      if (Array.isArray(collection)) {
        typeOfCollection = collection
      } else {
        typeOfCollection = Object.values(collection)
      }
       
        typeOfCollection.forEach(x => {
          callback(x)
        })
        return collection
    },

    map: function(collection, callback) {
      if(!(Array.isArray(collection)))
        collection = Object.values(collection)

        const newArray = []
        collection.forEach(x =>{
          newArray.push(callback(x))
        })
      return newArray
    },

    reduce: function(collection,callback,acc = 0) {
      if(!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}
			let len = collection.length;
      for (let i = 0; i < collection.length; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc
    },

    find: function(collection,predicate) {
      if(!(Array.isArray(collection)))
      collection = Object.values(collection)
      
      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) return collection[i]
      }
    },

    filter: function(collection,predicate) {
      if(!(Array.isArray(collection)))
      collection = Object.values(collection)
      const newArray = []
      for(let i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) 
          newArray.push(collection[i])
      }
      return newArray
    },
    
    size: function(collection) {
      if(Array.isArray(collection)){
      return collection.length
      } else {
       return Object.keys(collection).length
      }
    },

    first: function(collection, n=0) {
      if(n===0) return collection[0]
      return collection.slice(0,n)
    },

    last: function(collection,n=-1) {
      if(n===-1) return collection[collection.length - 1]
      return collection.slice(-n)
    },

    compact: function(collection) {
      return collection.filter(x => {
        if(!!x) return x
      })
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort((a,b) => {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, x) {
      if(typeof x === "boolean") return array.flat()
      return array.flat(Infinity)
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
     //return Object.keys(obj)
    },

    values: function(obj) {
      const vals = []
      for(let key in obj) {
        vals.push(obj[key])
      }
      return vals
      //return Object.values(obj)
    },
    functions: function(obj) {
      const functionNames = []
      for(let key in obj) {
        if (typeof obj[key] === 'function') {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
