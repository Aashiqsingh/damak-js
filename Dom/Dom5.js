const callFun = ()=>{

    const input = document.getElementById("ans")
    console.log(input.value);
    const output = document.getElementById("output");

    if(input.value.length < 3){
        // alert("You have entered more than 3 characters")
        // console.log("Name is too long");
        output.innerHTML = "Name is too long"
        input.style.outline = "2px solid red"

    }else{
        output.innerHTML = ""
        input.style.outline = "2px solid green"
    }
}

const callfun2 = ()=>{
    const input = document.getElementById("age")
    console.log(input.value);
    const output2 = document.getElementById("output2");
    if(input.value < 18){
        output2.innerHTML = "You are Kidss..."
    }
    else{
        output2.innerHTML = "";
    }
} 