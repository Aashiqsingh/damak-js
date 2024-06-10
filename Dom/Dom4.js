function changeColor(){

    document.body.bgColor = "red"

    setTimeout(blue , 3000);
}

function blue(){
    document.body.bgColor = "blue"
    setTimeout(green , 2000)
}

function green(){
    document.body.bgColor = "green"
    setTimeout(changeColor , 2000)
}
