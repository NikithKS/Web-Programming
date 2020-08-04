function ready(){
    document.getElementById("thats-onload").innerHTML = "Image Load...";
    document.getElementById("loading-image").onload = loaded();
}

function loaded(){
    document.getElementById("thats-onload").innerHTML = "Image Loaded.";

}

document.addEventListener("DOMContentLoaded", ready);

function change(){
    const content = document.getElementById('hello-content');
    if(content.innerHTML === "Hello World!"){
        content.innerHTML = "Namaste World!";
        document.getElementById('hello-button').innerHTML = "Go Western";
    }
    else {
        content.innerHTML = "Hello World!";
        document.getElementById('hello-button').innerHTML = "Go Desi";
    }
    tempAlert("That was using onclick event!", 3000);
}

function tempAlert(msg, forTime) {
    var blk = document.createElement("div")
    blk.setAttribute("style", "position:absolute; top:5%; right:10%; background-color:lightyellow; border: solid 3px yellow; padding:10px; border-radius:5px; opacity: 0.75;");
    blk.innerHTML = msg;
    setTimeout (function(){
        blk.parentNode.removeChild(blk);
    }, forTime);
    document.body.appendChild(blk);
}