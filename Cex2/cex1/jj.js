const k = [1,2,3]


function boom(){
    "use strict";

    k[0]=4
    k[1]=5
    k[2]=7

    console.log(k)
}

boom()


// conscise anonymous function 


const myConcat = (arr1,arr2) => arr1.concat(arr2)
console.log(myConcat([1,2],[3,4,5]))

// arrow functions work better with map filter and reduce 

 