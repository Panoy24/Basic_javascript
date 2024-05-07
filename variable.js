/*
//Number type
let age = 18;
console.log(age); //18
let blue = 0x0000ff;
console.log(blue); // 255
let pi = 3.14159;
console.log(pi); // 3.14159


//String type
let firstName = 'Soukphachan';
let lastName = "SAYAKONE";

console.log(firstName + " " + lastName); // John Doe


//Boolean type
let isReading = true;
let isSleeping = false;

console.log(isReading); //true
console.log(isSleeping); //false


//Null type
let car = null;

console.log(car); // null


//undefined type
let x;

console.log(x); // undefined


//Symbol type
let syml = Symbol('foo');

console.log(syml); // Symbol(foo)


//Object type
let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';

console.log(myCar.make); //ford


//use case sample of \n
console.log("Hello\nWorld");


//use case sample of \r
console.log("Hello\rWorld");


//use case sample of \t
console.log("Hello\tWorld");


//use case sample of \' and \"
console.log('I\'m Soukphachan');
console.log("I'm Soukphachan");
//console.log('I\'m Soukphachan'); //Error


//use case sample of \\
console.log('C:\\program\\api');


//use case sample of ${}
let names = 'Soukphachan';
let ages = '18';

console.log(`Hello, My name is ${names} and I'm ${ages} years old.`);


//use case of object
var abj ={
    names = 'Soukphachan',
    ages = '18',
    isMarried: true
};

console.log(`Hello, My name is ${obj.name} and
I'm ${obj.ages} years old.
I'm ${obj.isMarried ? 'marrisd : 'not married}.`); 


//function
function sayHello(name) {
    return `Hello, ${name}`;
}

console.log(sayHello('Soukphachan'));


//function use case of =>
    let sayHello2 = (names) => `Hello, ${names}`;

console.log(sayHello2('Soukphachan'));


//use case of object destructuring
let obj ={
    name : 'Soukphachan',
    age : 18,
isMarried: true
};

let {name, age, isMarried}= obj;

console.log(`Hello, my name is ${name} and 
I'm ${age} years old.
I'm ${isMarried ? 'married' : 'not married'}.`);


//use case of array destructuring
let arr = ['Soukphachan', 18, true];
let [name2, age2, isMarried2] = arr;

console.log(`Hello, my name is ${name2} and 
I'm ${age2} years old.
I'm ${isMarried2 ? 'married' : 'not married'}.`);


//sample of spead operator
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr1, ...arr2];

console.log(arr3); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//sample of spead operator in case of object
let obj1 = {name: 'Panoi', age: 23}
let obj2 = {width: 42, height: 160}
let obj3 = {...obj1, ...obj2}

console.log(obj3);


//Rest parameter
function getMyName(...args){
    return args.join(' ');
}

console.log(getMyName('Panoi', 'Taiy'));
console.log(getMyName(18));


//sample of default parameter
function getNum(a = 1, b =2, c){
    console.log(a, b, c);
}

getNum();
getNum(4);
getNum(4, 5);
getNum(4, 5, 6);

let arr = [1, 2, 3, 4 ,5];
let mix = [1, "a", "b", ];
let obj = [{name: 'Pannoi'}, {name: 'taiy'}];
let arr2 = [arr,arr];

console.log(arr);
console.log(mix);
console.log(obj);
console.log(arr2);
console.log(mix[1]);


//sample of loop foreach
for (let i = 0; i < 5; i++) {
    console.log(i);
}


//sample of loop foreach
let arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(value, index);
});


//sample of for of
let arr = [1, 2, 3, 4, 5];

for (let value of arr){
    console.log(value);
}


//sample of for in
let obj = {
    name: 'Soukphachan',
    age: 18,
    isMarried: true
};

for (let key in obj) {
    console.log(key, obj[key]);
}


//array function push and pop
let arr =[1, 2, 3, 4, 5];
arr.push(6);

console.log(arr); // [1, 2, 3, 4, 5, 6]
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]


//sample of array function shift and unshift
let arr = [1, 2, 3, 4, 5];

arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]

arr.shift();
console.log(arr); // [ 1, 2, 3, 4, 5 ]

*/

//sample of array function concat
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = arr1.concat(arr2);

console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//sample of array function slice
let arr4 = [1, 2, 3, 4, 5];
let arr5 = arr4.slice(1, 3);

console.log(arr5); // [2, 3]



//sample of array function splice
let arr6 = [1,2,3,4,5];
arr6.splice(1,2);

console.log(arr6); // [1, 4, 5]


//sample of array function copyWithin
let arr7 = [1, 2, 3, 4, 5];
arr7.copyWithin(0, 3);

console.log(arr7); // [4, 5, 3, 4, 5]


//sample of array function fill
let arr8 = [1, 2, 3, 4, 5];
arr8.fill(0, 3);

console.log(arr8); // [1, 0, 0, 4, 5]


//sample of array function reverse
let arr9 = [1, 2, 3, 4, 5];
arr9.reverse();

console.log(arr9); // [5, 4, 3, 2, 1]


//sample of array function sort
let arr10 = [5, 4, 3, 2, 1];
arr10.sort(0, 3);

console.log(arr10); // [1, 2, 3, 4, 5]
