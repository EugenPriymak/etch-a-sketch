let mainDiv = document.querySelector('.main-board');
let btnInput = document.querySelector('.btn-input');
let mainBoard = document.querySelector('.main-board');
// btnInput.addEventListener('click', createBoard);
let num;

function createBoard(num) {
    console.log("input");
    mainBoard.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    mainBoard.style.gridTemplateColumns =  `repeat(${num}, 1fr)`;
    let numDivs = num * num;
    for (i=0; i< numDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-div');
        div.style.cssText = 'border: .1px solid black';
        mainDiv.appendChild(div);
        div.addEventListener('mouseover' , () => div.style.backgroundColor = 'red');
    }    
}

createBoard(100);





