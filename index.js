// Add tabindex to all images
window.onload = function() {
    let images = document.querySelectorAll('#gallery img');
    images.forEach((img, index) => {
        img.setAttribute('tabindex', '0');
        console.log(`Tabindex added to image ${index + 1}`);
    });
};

// Mouse and keyboard events
let figures = document.querySelectorAll('#gallery figure');
figures.forEach((figure) => {
    figure.addEventListener('mouseover', () => {
        console.log('Mouse over figure');
    });
    figure.addEventListener('mouseleave', () => {
        console.log('Mouse left figure');
    });
    figure.addEventListener('focus', () => {
        console.log('Figure focused');
    });
    figure.addEventListener('blur', () => {
        console.log('Figure lost focus');
    });
});

