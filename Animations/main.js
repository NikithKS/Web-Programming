let isJumbled = False
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

