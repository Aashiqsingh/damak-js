// var colors = ["red","pink","green","yellow","blue","cyan","lime"]

// function change(){

//     const mydiv = document.getElementById("mydiv")
//     const random = Math.floor(Math.random() * colors.length)
//     // console.log("random",random);

//     mydiv.style.backgroundColor = colors[random]
// }








var images = ["img1.jpg","img2.jpg","img3.jpeg","img4.avif","img5.jpg"]

function change(){

    const myimg = document.getElementById("myimg")

    const random = Math.floor(Math.random() * images.length)

    var path = "../Images/"+ images[random]

    myimg.src = path

    

}





