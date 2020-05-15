const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (col, alertEach) {
      const newCol = (col instanceof Array) ? col.slice() : Object.values(col)
      for (let i = 0; i < newCol.length; i++) {
        alertEach(newCol[i])
      }
      return col
    },

    map: function (collection, callback) {
      if (!(collection instanceof Array)) collection = Object.values(collection)

      let newArr = [];
      for (let i = 0; i < collection.length; i++) {
        newArr.push(callback(collection[i]))
      }
      return newArr
    },

    reduce: function (col, callback, acc) {
      let collection = col.slice(0)

      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;

    },

    find: function (collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) return collection[i]
      }
      return undefined
    },

    filter: function (collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newArr.push(collection[i])

      return newArr
    },
    size: (col) => {
      return Object.keys(col).length
    },
    first: (col, n) => { return n ? col.slice(0, n) : col[0] },
    last: (col, n) => { return n ? col.slice(col.length - n, col.length) : col[col.length - 1] },
    compact: (arry) => {
      let newArr = []
      for (let i = 0; i < arry.length; i++)
        if (!!arry[i]) (newArr.push(arry[i]))
      return newArr
    },
    sortBy: (array, cb) => {
      if ((array instanceof Array)) (array = Object.values(array))
      let newArr = [...array]
      newArr.sort((a, b) => cb(a) - cb(b))
      return newArr
    },
    unlock: function (unpack, arr) { for (let ele of arr) (unpack.push(ele)) },
    flatten: function (array, shallow, newArr = []) {

      if (!Array.isArray(array)) return newArr.push(array)
      if (shallow) {
        for (let val of array)
          Array.isArray(val) ? this.unlock(newArr, val) : newArr.push(val)
      } else {
        for (let val of array) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr

    },
    uniqSorted: function (arr, iter) {
      const sorted = [arr[0]]
      for (let i = 1; i < arr.length; i++) {
        if (sorted[i - 1] !== arr[i])
          sorted.push(arr[i])
      }
      return sorted
    },

    uniq: function (arr, sorted = false, iter = false) {
      if (sorted) {
        return fi.uniqSorted(arr, iter)
      } else if (!iter) {
        return Array.from(new Set(arr))
      } else {
        const regVal = new Set()
        const nonDupVal = new Set()
        for (let val of arr) {
          const defVals = iter(val)
          if (!regVal.has(defVals)) {
            regVal.add(defVals)
            nonDupVal.add(val)
          }
        }
        return Array.from(nonDupVal)
      }
    },
    keys: (obj) => {
      const keys = []
      for (let key in obj) (keys.push(key))
      return keys
    },
    values: (vals) => {
      const ele = Object.values(vals)
      return ele
    },
    functions: (obj) => {
      const fnNames = []
      for (let key in obj) {
        if (typeof obj[key] === "function") (fnNames.push(key))
      }
      return fnNames.sort()
    }
  }
})()

fi.libraryMethod()