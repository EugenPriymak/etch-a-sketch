let mainDiv = document.querySelector('.main-board');
let btnSelect = document.querySelector('.select');
let mainBoard = document.querySelector('.main-board');
let btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', reset);
btnSelect.addEventListener('click', getSize);
let num;


function createBoard(num) {
    console.log("input");
    mainBoard.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    mainBoard.style.gridTemplateColumns =  `repeat(${num}, 1fr)`;
    let numDivs = num * num;
    for (i=0; i< numDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-div');
        div.style.cssText = 'border: 1px solid black';
        mainDiv.appendChild(div);
        div.addEventListener('mouseover' , () => div.style.backgroundColor = 'red');
    }    
}
function getSize() {
    let input = prompt("What will be the size of the board?");
    
    if(input <=100 && input >0) {
        mainBoard.innerHTML = '';
        createBoard(input);

    }
}

function reset() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = "white");  
}





