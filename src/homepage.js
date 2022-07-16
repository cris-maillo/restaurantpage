const homeDOM = () =>{
    const content = document.getElementById("content");
    
    //image
    let baoImg = document.createElement("img");
    baoImg.src = "BaoGroup3.jpg";
    baoImg.width="500";
    //headline
    let headlineText = document.createTextNode("Best Ramen Restaurant in London");
    let headline = document.createElement("h3");
    headline.appendChild(headlineText);
    //copy
    let copyText = document.createTextNode("I promise it is the best!!");
    let copy = document.createElement("p");
    copy.appendChild(copyText);

    //append
    content.appendChild(baoImg);
    content.appendChild(headline);
    content.appendChild(copy);
}

export {homeDOM};