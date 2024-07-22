const lasvegas = (amount)=>{

    return "we are going to lasvegas with best package "+ amount
}

const singapore = (amount)=>{
    return "we are going to singapore with best package "+ amount
}

const goa = (amount)=>{
    return "we are going to goa with best package "+ amount
}

// cb -- callback 
const travel = (option , cb)=>{

    var x = cb(option)
    console.log(x);

}

var budget = 6900;
if(budget > 15000)
{
    travel(budget,lasvegas)
}
else if(budget > 10000){
    travel(budget,singapore)
}
else if(budget > 5000){
    travel(budget,goa)
}
else {
    console.log("you need money bro kamane jao");
}
