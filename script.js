console.log("Hello World");

// Weird Scope - Don't use
// var x = 5;
// Regular old variable
let y = 6;
y=10; // You can change this value

const z = 7; // This is a constant. Can't be changed
// z=10; // this throws and error.

console.log(y,z);
console.log(y+z);
console.log(y-z);
console.log(y*z);
console.log(y/z);
console.log(y%z); // This does division but returns the remainder
console.log(y**z); // exponents

let fname="Liam ";
let lname="McGinn";
console.log(fname + lname);

console.log('${ fname } ${ lname} ');
console.log('${ fname } ${ 5*9 }');
console.log( lname + 6 );


let user = "Liam";
let pass = "foo";

if (user == "Liam") {
    console.log('you are '  + user);
}

 user = "Liam";
if (user == "Liam") {
    console.log('you are '  + user);
} else {
    console.warn("DENIED")
} 

 user = "Liam";
if (user == "Liam" && pass == "foo") {
    console.log('you are '  + user + ' and your pass is ' + pass);
} else {
    console.warn("DENIED")
} 

const license = 18;
const jrop = 16;
const rental = 25;

let myAge = 46;
function checkAge() {
if (myAge < license && myAge>= jrop) {
    console.log('you can have a JrOp License');
} 

if (myAge >= license) {
    console.log('you can have a regular license')
    }

if (myAge >= rental) {
    console.log('you can rent a car')

}

if (myAge < jrop) {
    console.log('You`re too young to drive')
}
}

checkAge(9);
checkAge(17);
checkAge(19);
checkAge(37);