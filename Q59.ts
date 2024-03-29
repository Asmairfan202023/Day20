// Q59:Add a special number: Make a program that creates custom address. These addresscan add a specific number to any other number you give them later.
// This program makes a function that add a specific number.
function makeAdder(valueAdd:number):(number:number) => number {
    // This is a magic box. It takes a number and your special number to it
    return function(number:
        number):number{
            return number +valueAdd;

    };
}
// Make a magic box that add 5 
let addFive =makeAdder(5);
console.log(addFive(20));