
function changeColor(){
    var images = ["img1.jpg","img2.jpg","img3.jpeg","img4.avif","img5.jpg"]
    var random = Math.floor(Math.random() * images.length)
    
    var path = '../Images/'+images[random]
    // document.body.bgColor = "red"
    document.body.background = path


   
        setTimeout(changeColor, 3000);
    
    
}




