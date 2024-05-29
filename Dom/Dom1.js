// const txt = document.getElementById("txt").innerHTML
// console.log(txt);

// document.getElementById("txt").innerHTML = "Hello world!!"

function changetext(){
    // console.log("Onclick event call");
    var x = document.getElementById("txt")
    x.innerHTML = "Hello world!!"
    x.style.color = "blue";
    x.style.backgroundColor = "teal"
}

function changecolor(){

    const myDiv = document.getElementById("myDiv")
    myDiv.style.height = "200px",
    myDiv.style.width = "200px",
    myDiv.style.backgroundColor = "red",
    myDiv.style.color = "white",
    myDiv.style.fontSize = "20px"
}

function blue(){
    const myDiv = document.getElementById("myDiv")
    myDiv.style.backgroundColor = "blue"
}