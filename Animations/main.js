function effect() {
    let chars = $('.name-char');
    for( let i = 0; i < chars.length; i++){
        slant(chars.eq(i));
    }
}

function slant(element) {
    let angle = (Math.random() * 60) - 30;
    let cmd = 'rotate(' + angle + 'deg) scale(1.25)';
    element.css('transform', cmd);       
}