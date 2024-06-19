var formbtn = document.getElementById("formbtn");

formbtn.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Form submitted..");
})

var namebtn = document.getElementById("namebtn");

namebtn.addEventListener("input", (e) => {
    // console.log(e);
    console.log(e.target.value);
})


var emailObj = ["aashiq@gmail.com", "damak@gmail.com", "yukti@gmail.com"]

var emailbtn = document.getElementById("emailbtn");

emailbtn.addEventListener("blur", (e) => {

    // console.log("plss enter email");

    if (emailObj.includes(e.target.value)) {

        console.log("Email has already exists..");
    }
    else {
        console.log("Email is valid..");
    }

})
