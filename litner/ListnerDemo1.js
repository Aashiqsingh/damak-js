// document.getElementById("output").addEventListener("click",function(){

//     alert("Functon is called...")
// })

// document.getElementById("output").addEventListener("click",()=>{

//     alert("Functon is called...");
// })


var output = document.getElementById("output");
output.addEventListener("click", () => {
    alert("Functon is called...");
})
output.addEventListener("dblclick", () => {
    output.style.backgroundColor = "red"
})