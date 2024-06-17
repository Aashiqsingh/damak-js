const submitHandler = (event) => {
    event.preventDefault();

    // console.log('submit');

    // alert("form submission")

    const name = document.getElementById("name")
    const gender = document.getElementsByName("gender")
    const age = document.getElementById("age")
    const output = document.getElementById("output")


    var gen = " "

    if(document.getElementsByName("gender")[0].checked == true)
    {
        gen = "Male"
    }
    else if(document.getElementsByName("gender")[1].checked == true )
    {
        gen = "Female"
    }
    else if (document.getElementsByName("gender")[2].checked)
    {
        gen = "Other"
    }


    if(gen === "Male"){
        if(age.value > 18){
            console.log("You are adult..");
        }
        else{
            console.log("You are kids..");
        }
    }
    if(gen === "Female"){
        if(age.value > 21){
            console.log("You are adult..");
        }
        else{
            console.log("You are kids..");
        }
    }
    if(gen === "Other"){
        if(age.value > 23){
            console.log("You are adult..");
        }
        else{
            console.log("You are kids..");
        }
    }



    // console.log("Name = ",name.value);
    // console.log("Gender = ",gen);
    // console.log("Age = ",age.value);


    output.innerHTML = "Name = "+name.value+"\nGender = "+gen+"\nAge = "+age.value

    var objData = {
        name: name.value,
        gender: gen,
        age: age.value
    }

    // output.innerHTML = JSON.stringify(objData);


}