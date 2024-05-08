function lasvegas() {
    console.log("Laswegas");
}

function singapore() {
    console.log("Singapore");
}

function Bangkok() {
    console.log("Bangkok");
}

function travel(x) {

    x()
}

var budget =1000;

if (budget >= 4000) {
    travel(lasvegas)
}
else if (budget >= 3000) {
    travel(singapore)
}
else if (budget >= 2000) {
    travel(Bangkok)
}
else{
    alert("Insufficient amount....")
}