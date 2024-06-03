const img = document.getElementById("img")

function ZoomIn(){
    img.style.height = "500px"
    img.style.width = "500px"
}

function zoomout(){
    img.style.height = "100px"
    img.style.width = "100px"
    img.style.border = "5px solid red"
}