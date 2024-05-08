// js --> single threaded 
// java multi threeded 

// Callback is a solution to multi thred 


function demo()
{
    console.log("Hello...");
}


// demo();


function add(x)
{
    // console.log(x);

    x()

    
}


// add(10);
// add(12.345)
// add(true)
// add("shree")

add(demo)