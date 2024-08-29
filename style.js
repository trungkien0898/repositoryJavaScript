//Bản thiết kết nhân vật
//Function deraclation
import { character } from "./character";
import { play } from "./play";

// const tom = new character("Tom", 5000, 50, 10);
// const jerry = new character("Jerry", 200, 20, 40);

// if(tom.isAlive()) {
//     console.log(`==> ${tom.name} wins!`);
// }else {
//     console.log(`==> ${jerry.name} wins!`)
// }

let person = {
    name: "trung kien",
    outerFunction: function() {
        const innerFunction = function() {
            console.log(this);
        }
        innerFunction.call(person);
    }
}

person.outerFunction();