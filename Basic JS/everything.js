document.addEventListener("DOMContentLoaded", ready);

function ready() {
    console.log("Ready");
    // document.addEventListener("offline",function () {alert("Disconnected");});
    document.addEventListener("pageshow",function () {tempAlert("Where were you, huh??", 2000)});
    document.addEventListener("scroll",function () {tempAlert("Scroll.... On...", 500)});
    // document.addEventListener("mozfullscreenchange",function () {tempAlert("It's bigger now", 2000)});
    
    const image1 = document.getElementById("loading-image");

    image1.addEventListener("dragstart",function() {tempAlert('Draaaag!', 2000)});
    image1.addEventListener("dragend",function() {tempAlert('Done draging?', 2000)});
    image1.addEventListener("mouseover",function() {tempAlert('Mouseon...', 2000)});
    image1.addEventListener("mouseout",function() {tempAlert('Mouseoff...', 2000)});
}


function loaded(){
    document.getElementById("thats-onload").innerHTML = "Image Loaded.(onload event)";
}

function inputBlur() {
    const inpFeild = document.getElementById("input-feild1");
    inpFeild.value = inpFeild.value.toUpperCase();
    tempAlert("The text entered gets capitialized onblur and remaining letter is measured on change!", 3000);
}

function inputChange() {
    const inpLen = document.getElementById("input-length");
    // console.log("change");
    inpLen.innerHTML = `Remaining: ${20 - document.getElementById("input-feild1").value.length}`;
}

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
    blk.setAttribute("style", "position:fixed; top:5%; right:7%; background-color:lightyellow; border: solid 3px yellow; padding:10px; border-radius:5px; opacity: 0.75; max-width:300px;");
    blk.innerHTML = msg;
    setTimeout (function(){
        blk.parentNode.removeChild(blk);
    }, forTime);
    document.body.appendChild(blk);
}