let mainDiv = document.querySelector('.main');

for (i=0; i<256; i++) {
    let div = document.createElement('div');
    div.style.cssText = 'border: 1px solid black; height: 48px; width: 48px;';
    mainDiv.appendChild(div);
}