const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        if (Array.isArray(collection)){
          for(let i = 0; i< collection.length; i++){
            callback(collection[i], i, collection);
          }
        }
        else{
          for(let i = 0; i < Object.keys(collection).length; i++){
            let key = Object.keys(collection)[i];
            let value = Object.values(collection)[i]; 
            callback(value, key, callback);
          }
        }
        return collection;
    },

    map: function(collection, callback) {
      let newAry = [];
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          newAry.push(callback(collection[i], i, collection));
        }
      } 
      else{
        for(let i = 0; i < Object.keys(collection).length; i++){
          let key = Object.keys(collection)[i];
          let value = Object.values(collection)[i]; 
          newAry.push(callback(value, key, callback));
        }
      }
      return newAry;
    },

    reduce: function(collection, callback, acc) {
      let s;
      let i;
      if (!!acc){
          s = acc;
          i = 0;
      }
      else{
          i = 1;
          s = collection[0];
      }
      for(; i < collection.length; i++){
          s = callback(s,collection[i], s);            
      }
      return s;
    },
    find: function(collection, predicate){
      let t;
      for(let i = 0; i < collection.length; i++){
        t = predicate(collection[i]);
        if (t===true){
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate){
      let t;
      let search = []
      for(let i = 0; i < collection.length; i++){
        t = predicate(collection[i]);
        if (t===true){
          search.push(collection[i])
        }
      }
      return search;
    },

    size: function(collection){
      let count = 0;
      if(Array.isArray(collection)){
        for(let i = 0; i< collection.length; i++){
          count++;
        }
      }
      else{
        for(let i = 0; i< Object.keys(collection).length; i++){
          count++;
        }
      }
      return count;
    },

    first: function(array, n = 0){
      if(n === 0){
        return array[0];
      }
      else{
        let newAry = []
        for(let i = 0; i < n; i++){
          newAry.push(array[i]);
        }
        return newAry;
      }
    },

    last: function(array, n = 0){
      if(n === 0){
        return array[array.length-1];
      }
      else{
        let newAry = []
        for(let i = 0; i < n; i++){
          newAry.push(array[array.length-(n-i)]);
        }
        return newAry;
      }
    },

    compact: function(array){
      let newAr = this.map(array, function(a){ return a});
      for(let i = 0; i < newAr.length; i++){
        if (!!!newAr[i]){
          newAr.splice(i,1);
        }
        if (newAr[i] === false){
          newAr.splice(i,1);
        }
      }
      return newAr;
    },

    sortBy: function(array, callback){
        let sortCopy = [...array]
        return sortCopy.sort(function(var1, var2){
          return callback(var1) - callback(var2);
        });
    },

    flatten: function(array, shallow){
      if (!!shallow){
        let newArray = [];
        for (let i = 0; i < array.length; i++){
          if (array[i].length > 1){
            for(let j = 0; j < array[i].length; j++){
              newArray.push(array[i][j]);
            }
          }
          else{
            newArray.push(array[i]);
          }
        }
        return newArray;
      }
      else{
        let nested = [];
        array.forEach( item => {
          if(Array.isArray(item)){
            nested.push(...this.flatten(item))
          }
          else{
            nested.push(item);
          }
        });
        return nested;
      } 
    },

    

    // uniq: function(array, isSorted, callback){
    //   let newAr = [];
    //   let flag = {};
    //   let val1;
    //   let val2;
    //   let count;
    //   let ary;
    //   if (array.some(e => typeof e === "object")){
    //     newAr = this.sortedObjects(array)
    //   }
    //   else{
    //     ary = array;
    //     if (Boolean(isSorted) === false){
    //       ary.sort();
    //     }


    //     if(!!!callback){
    //       for (let i = 0; i < ary.length; i++){
    //         count = i + 1;
    //         val1 = ary[i];
    //         if(!flag[val1]){
    //           newAr.push(val1)
    //         }
    //         while(count < ary.length){
    //           if(!flag[val1]){
    //             val2 = ary[count];
    //           }
    //             if(!flag[val2]){
    //               if (val1 === val2){
    //                 flag[val2] = true
    //               }
    //             }
    //           count++;
    //         }
    //         flag[val1] = true;
    //       }
    //     }
      
    //     else if(!!callback){
    //       for (let i = 0; i < ary.length; i++){
    //         count = i + 1;
    //         val1 = ary[i];
    //         if(!flag[val1]){
    //           newAr.push(val1)
    //         }
    //         while(count < ary.length){
    //           if(!flag[val1]){
    //             val2 = ary[count];
    //             if(!flag[val2]){
    //               if (callback(val1) === callback(val2)){
    //                 flag[val2] = true
    //               }
    //             }
    //           }
    //           count++;
    //         }
    //         flag[val1] = true;        
    //       }
    //     }
    //   }
    //   console.log(`${newAr}`)
    //   return newAr;
    // }, got this to work for array and then realized that it needed to work for objects too so...
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let i = 1; idx < collection.length; i++) {
        if (sorted[i-1] !== collection[idx])
          sorted.push(collection[i])
      }
      return sorted
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

    keys: function(object){
      return Object.keys(object);
    },

    values: function(object){
      return Object.values(object);
    },

    functions: function(object) {
      let functions = []
      let vals = fi.values(object)
      for(let i = 0; i < fi.keys(object).length; i++){
        if(typeof vals[i] === 'function'){
          functions.push(vals[i])
        }
      }
      console.log(functions);
      return functions.sort();
    },


  }
})()

fi.libraryMethod()
