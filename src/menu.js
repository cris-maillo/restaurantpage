const menuDOM = () =>{
    const content = document.getElementById("content");
    
    //image
    let baoImg = document.createElement("img");
    baoImg.src = "BaoGroup3.jpg";
    baoImg.width="500";
    //headline
    let headlineText = document.createTextNode("Menu");
    let headline = document.createElement("h3");
    headline.appendChild(headlineText);
    //copy
    let copyText = document.createTextNode("Baos and Ramen");
    let copy = document.createElement("p");
    copy.appendChild(copyText);

    //append
    content.appendChild(baoImg);
    content.appendChild(headline);
    content.appendChild(copy);
}

export {menuDOM};