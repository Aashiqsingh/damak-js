const gujarati = (amount,person)=>{

    return amount*person
}

const punjabi = (amount,person)=>{

    return amount*person
}

const chieness = (amount,person)=>{

    return amount*person
}


var amt = 300;

switch(amt){

    case 100: 
            var x = gujarati(amt,4)
            console.log("You selected gujarati and your bill is = ",x);
            break;
        
    case 200:
            console.log("You selected punjabi menu and your bill is = ",punjabi(amt,2));
            break;

    case 300:
            let z = chieness(amt,5)
            console.log("you selected chiness and you bill is = ",z);
            break;

    default:
            console.log("Invalid Amount");
}