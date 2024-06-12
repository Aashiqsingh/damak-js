const submitHandler = (e)=>{
    e.preventDefault();  // prevent default


    const name = document.getElementById("name")
    // console.log("Name = ",name.value);
    const nameErr = document.getElementById("nameErr")
    const age = document.getElementById("age")
    const ageErr = document.getElementById("ageErr")

    // if(name.value.length == ""){
    //     nameErr.innerHTML = "<font color='red'>Please enter name <font>"
    //     name.style.outline = "2px solid red"
    // }
    // else if(name.value.length  < 4 ){
    //     nameErr.innerHTML = "<font color='red'>Name should be atleast 4 characters <font>"
    //     name.style.outline = "2px solid red"
    // }
    // else{
    //     nameErr.innerHTML = ""
    //     name.style.outline = "2px solid green"
    // }

    
    // if(age.value == ""){
    //     ageErr.innerHTML = "<font color='red'>Please enter age <font>"
    //     age.style.outline = "2px solid red"
    // }
    // else if(age.value < 18){
    //     ageErr.innerHTML = "<font color='red'>You are kid... <font>"
    //     age.style.outline = "2px solid red"
    // }
    // else{
    //     ageErr.innerHTML = ""
    //     age.style.outline = "2px solid green"
    // }



    // alert("form submitted....")
    console.log("form submitted....");
    // console.log(name.value);
    // console.log(age.value);


    var user = {
        name: name.value,
        age: age.value
    }

    console.log(user);


    const data = document.getElementById("data")
    // data.innerHTML = user
    data.innerHTML = JSON.stringify(user)

    var x = JSON.stringify(user)
    console.log(x[0]);
}