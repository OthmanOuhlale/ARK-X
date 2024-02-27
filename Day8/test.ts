//function test(a: number, b: number) :number{
//   return a + b;
// }

// console.log(test(1, 2));

let nom: string;
let age: number = 20;
let email: any;
let hobbies: string[] = ["football", "swimming"];

// the type User holds a name (string) and an age (number)
type User = { name: string; age: number };

const john: User = { name: "John Doe", age: 23 };

type Absence = boolean[];
const johnAbsence: Absence = [true, true, false, true];


const add = (a:number, b:number) :number => {
    let sum = a + b;
    return sum;
}

console.log(add(15, 15));

const greet = (name: string) : string => {
    return `Hello ${name}`;
}

console.log(greet("Othman"));


// if (Boolean(product.preOrder) === true){
//     console.log("your product has been shipped");
// } else {
//     console.log("your product has not been shipped");
// }