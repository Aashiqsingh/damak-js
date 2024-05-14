var aval_bal = 150000;

const withdrawal = (amt) =>{

    
    aval_bal= aval_bal - amt;
    console.log("After withdral your amount will be ",aval_bal);
    check_bal(aval_bal);
}

const check_bal = (amt)=>{

    console.log("your current balance is ",amt);
}

const deposit = (amt)=>{

    aval_bal = aval_bal + amt;
    console.log("Your deposite sussessfully!!!");
    check_bal(aval_bal);

}
const bank = (cb1,cb2,cb3)=>{

    let x = parseInt(prompt("1 for withdrawl \n2 for checkBalance \n3 for deposite"))
    if(x==1){
        let a = parseInt(prompt("Enter the amount which u want to withdrawal .."))
        console.log("Before withdrawal your amount is ",aval_bal);
        cb1(a)
    }
    else if(x==2){
        cb2(aval_bal)
    }
    else if(x==3){
        let b = parseInt(prompt("enter the amount which u want to deposit"));
        console.log("before deposite your amount is ",aval_bal);
        cb3(b)
    }

}



var x = prompt("You want to enter bank if yes press 'y' else 'n'");

if(x === 'y')
    {
        console.log("Welcome bank!!");
        bank(withdrawal,check_bal,deposit)
    }
    else{
        alert('Thank you for visiting')
    }