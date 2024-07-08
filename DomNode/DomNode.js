const ans = document.getElementById('ans');
const btn = document.getElementById('btn');


btn.addEventListener("click", () => {

    const h1 = document.createElement('h1');
    h1.innerHTML = "Hello world!!!";

    const image = document.createElement('img')
    image.src = "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg";
    // image.setAttribute("height", "100px")
    image.height = 100;
    image.width = 100;



    ans.appendChild(image)
    ans.appendChild(h1);
})

