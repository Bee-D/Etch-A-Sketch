function createGrid(rows, columns){
    let grid = rows * columns; // for looping
    let sketchBoard = document.querySelector('.sketch-board');
    sketchBoard.style.gridTemplate = `repeat( ${rows}, 1fr) / repeat(${columns}, 1fr)`;
    for(let i = 0; i < grid; i++){
        let gridCells = document.createElement('div');
        gridCells.setAttribute('class', 'grid-cells');
        gridCells.style.width = '100%';
        gridCells.style.height = '100%';
        sketchBoard.append(gridCells);
    }
}

createGrid(32,32);

let resetButton = document.querySelector('.reset-button');
let modesButton = document.querySelectorAll('.modes-button');
let gridCells = document.querySelectorAll('.grid-cells');

function setMode(colorValue){
    gridCells.forEach(eachCell => {
        eachCell.addEventListener(`mouseover`, () => {
            eachCell.style.backgroundColor = `${colorValue}`; 
        }) 
    });
}

function normalMode(){
    setMode('#28282B');
}

function resetMode(){
    resetButton.addEventListener('click', () => {
        gridCells.forEach(eachCell => {
            eachCell.style.backgroundColor = '#d7cec9';
        });
    })
}

normalMode()
resetMode()