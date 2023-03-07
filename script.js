let max = null;
let min = null;

let entered = parseInt(prompt("Write a number: "));

max = entered;
min = entered;

console.log("max : " + max);
console.log("min : " + min);

while(true)
{
    let valueEntered = prompt("Write a number: ");

    if(valueEntered === "quit")
        break;

    entered = parseInt(valueEntered);

    if (max < entered) {
        max = entered;
    }

    if (min > entered) {
        min = entered;
    }

    //max = entered;
    //min = entered;

    console.log("max : " + max);
    console.log("min : " + min);
}

console.log("max final : " + max);
console.log("min final : " + min);