let mainDiv = document.querySelector('.main');

for (i=0; i<256; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-div');
    div.style.cssText = 'border: 1px solid black; height: 20px; width: 20px;';
    mainDiv.appendChild(div);
}