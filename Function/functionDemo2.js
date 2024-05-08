function Goa(amount){

    console.log("You are in Goa....", amount);
}


function Singapore(amount) {

    return "You are in singapore..." + amount 
}

function Lasvegas(amount){

    console.log("You are in lasvegas",amount);
}


var budget = 200;

if(budget > 1000){
    Lasvegas(budget)
}
else if(budget > 600){
    let x = Singapore(budget)
    console.log(x);
}
else if(budget > 300){
    Goa(budget)
}
else{
    console.log("You need More Money...");
}