function change(){
    const content = document.getElementById('content');
    const button = document.getElementById('butt')
    if(content.innerHTML === "Hello World!"){
        content.innerHTML = "Namaste World!";
        button.innerHTML = "Go Western";
    }
    else {
        content.innerHTML = "Hello World!";
        button.innerHTML = "Go Desi";
    }
}
