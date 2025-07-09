let currentColor = 'black';
let isDrawing = false;


const colorItems = document.querySelectorAll('.item');
const pixels = document.querySelectorAll('.pixel');
const clearBtn = document.querySelector('p');


function colorPixel() {
    if (!isDrawing) return;
    this.style.backgroundColor = currentColor;
}


function clearCanvas() {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white';
    });
}


function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
}

colorItems.forEach(item => {
    item.addEventListener('click', function selectColor(e) {
         currentColor = this.style.backgroundColor;
    }
    );
});

pixels.forEach(pixel => {
    pixel.addEventListener('mousedown', startDrawing);
    pixel.addEventListener('mousemove', colorPixel);
    pixel.addEventListener('mouseup', stopDrawing);
    
});

clearBtn.addEventListener('click', clearCanvas);


pixels.forEach(pixel => {
    pixel.addEventListener('click', function() {
        this.style.backgroundColor = currentColor;
    });
});