// console.log -> alows to see things in console 


// comment 

var t = 'yo homies';

// var - whole program 
// let - within the scope 
// const - constant that can never change 

var a;
var b = 2;

console.log(a,b)
console.log("Hello\n from Tarun \n \t")


l  = t.length;

console.log(t[0])



function wb(name,id){

    var name = name
    var id = id 
    console.log(name, id)
}

console.log("Puka",1);


var arr1 = [1,2,3,4,"Puka"];

console.log(arr1[(arr1.length)-1]);

// append  -> push()

arr1.push("lanja","munda")

console.log(arr1)
// pop()


//shift() removed the first element 
// unshift() - adds an element to the begining of the array 


// global scope 

var a1 = 10;
var b1;

function add1(a,b){
    if(typeof a !="undefined"){
        console.log("puvva");
    }
    if(typeof b !="undefined"){
        console.log("puvva");
    }
    //console.log(a+b);

}


add1(a1,b1)
// if you dont put  the var keyword , the variable becomes global 

// you can have same global and local var as same name , local var has the first preference 

// booleans true or false 

// == and === check it  == does a type conversion 
// && - and , || - or operators 

// switch case uses strict equality operator === 






// creating objects 

var ourdog = {
    "name":"boom",
    "age":10,
    "friends": 0 
}

console.log(ourdog.age)

ourdog.name = "lanja"

console.log(ourdog.name)

ourdog.married = "Nope"

console.log(ourdog.married)


delete ourdog.age


// to check if a property exists or not we use obj.hasOwnProperty(property_name_to check) function 



// parseInt(string) func

// mainly use const and let , let is block scope 

// Object.freeze(object_name)  --- to freeze an object 

// map filter and reduce 

// arrow functions 
// rest operator 
// spreaD operator 

// structuring and destructuring assignments 

