var isAlive = true;
var age = 23;


let choice = prompt("1 for addition \n 2 for subtraction Enter your choice")


switch (isAlive) {
    case true:
        console.log("Alive");
        let x = age > 18 ? "Adult" : "Minor";
        console.log(x);
        break;
    case false:
        console.log("Dead");
    default:
        break;
}