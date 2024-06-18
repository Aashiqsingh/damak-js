var box = document.getElementsByClassName("box")
// console.log(box);


box[0].addEventListener("mouseenter", () => {
    box[1].style.backgroundColor = " red"
})

box[0].addEventListener("dblclick", () => {
    box[1].innerHTML = " <h1>Hello world</h1>"
    box[1].style.color = "white"
})

const circle = document.getElementById("circle")

var colors = ["red", "green", "blue", "pink", "yellow", "aqua", "teal"]
circle.addEventListener("mousemove", () => {

    var random = Math.floor(Math.random() * colors.length)

    for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = colors[random]
    }
})