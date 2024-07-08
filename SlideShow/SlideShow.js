var images = ["img1.jpg", "img2.avif", "img3.jpg", "img4.avif", "img5.avif"];

var currentIndex = 0;

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const image = document.getElementById("image");

prev.addEventListener("click",()=>{


    //        1  = (2 -1 + 5)%5
    currentIndex = (currentIndex - 1 + images.length)% images.length;

    image.src = "../Images/"+images[currentIndex]

})


next.addEventListener("click",()=>{

    // 1 = 1 + 1 % 5
    currentIndex = (currentIndex + 1) % images.length

    image.src = "../Images/"+images[currentIndex]
})