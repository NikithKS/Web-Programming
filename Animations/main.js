let isJumbled = false
function effect() {
    let chars = $('.name-char');
    for( let i = 0; i < chars.length; i++){
        let angle = (Math.random() * 100) - 50;
        slant(chars.eq(i), angle);
    }
}

function removeEffect() {
    let chars = $('.name-char');
    for( let i = 0; i < chars.length; i++){
        slant(chars.eq(i), 0);
    }
}

function slant(element, angle) {
    element.css('transform', `rotate(${angle}deg)`);       
}

let callback = (entries, observer) => {
    entries.forEach(entry =>{
        console.log("VISIBLE");
    });
};
let options = {
    threshold : 0.1
}
let observer = new IntersectionObserver(callback, options);

let skewEle = document.getElementById('skew-body');
observer.observe(skewEle);
