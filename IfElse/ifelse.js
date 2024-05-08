// var num = prompt("Enter number");


// if(num%2===0){
//     console.log("Even ");
// }
// else{
//     console.log("Odd");
// }


var isPicnic = true;

var budget = 600;


if(isPicnic === false){
    console.log("Better luck next time");
}
else{
    if(budget > 1000){
        console.log("Lasvegas Tour");
    }
    else if(budget > 500){
        console.log("Manali Tour");
    }
    else if(budget > 200){
        console.log("Goa Tour");
    }
    else{
        console.log("Paise kamao");
    }
}