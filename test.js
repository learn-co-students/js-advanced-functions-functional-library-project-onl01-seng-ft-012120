let sortedObjects = function(array){
    let sorted = []
    let flag = {};
    let count = 0;
    let objCount = 0;
    while (objCount < array.length-1){
      while (count < Object.values(array[objCount]).length){
        if (Object.values(array[objCount])[count] === Object.values(array[objCount+1])[count]){
          flag[array[objCount+1]] = true;
        }
          count++;
      }
      objCount++  
    }
    for(let i = 0; i < array.length; i++){
      if (!flag[array[i]]){
        sorted.push(array[i])
      }
    }
    return sorted;
  }

  let uniq = function(array, isSorted, callback){
    let newAr = [];
    let flag = {};
    let val1;
    let val2;
    let count;
    let ary;
    if (array.some(e => typeof e === "object")){
      newAr = sortedObjects(array)
    }
    else{
      ary = array;
      if (Boolean(isSorted) === false){
        ary.sort();
      }


      if(!!!callback){
        for (let i = 0; i < ary.length; i++){
          count = i + 1;
          val1 = ary[i];
          if(!flag[val1]){
            newAr.push(val1)
          }
          while(count < ary.length){
            if(!flag[val1]){
              val2 = ary[count];
            }
              if(!flag[val2]){
                if (val1 === val2){
                  flag[val2] = true
                }
              }
            count++;
          }
          flag[val1] = true;
        }
      }
    
      else if(!!callback){
        for (let i = 0; i < ary.length; i++){
          count = i + 1;
          val1 = ary[i];
          if(!flag[val1]){
            newAr.push(val1)
          }
          while(count < ary.length){
            if(!flag[val1]){
              val2 = ary[count];
              if(!flag[val2]){
                if (callback(val1) === callback(val2)){
                  flag[val2] = true
                }
              }
            }
            count++;
          }
          flag[val1] = true;        
        }
      }
    }
    console.log(`${newAr}`)
    return newAr;
  }
  const objA = {a: 1, b: 2}
  const objB = objA
  const objC = {c: 3, d: 4}
  console.log(uniq([objA, objB, objC]))