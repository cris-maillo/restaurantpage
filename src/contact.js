const contactDOM = () =>{
    const content = document.getElementById("content");
    
    //image
    let baoImg = document.createElement("img");
    baoImg.src = "BaoGroup3.jpg";
    baoImg.width="500";
    //headline
    let headlineText = document.createTextNode("Contact");
    let headline = document.createElement("h3");
    headline.appendChild(headlineText);
    //copy
    let copyText = document.createTextNode("baoguy@bao.com");
    let copy = document.createElement("p");
    copy.appendChild(copyText);

    //append
    content.appendChild(baoImg);
    content.appendChild(headline);
    content.appendChild(copy);
}

export {contactDOM};