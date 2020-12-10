const etchGrid = document.getElementById('etchGrid');
const resetButton = document.getElementById('resetButton');
const inputDimensions = document.getElementById('inputDimensions');
const confirmGridDimensions = document.getElementById('confirmGridDimensions');
const inputDimensionButtons = document.getElementById('inputDimensionButtons');
createGrid();

let x = document.getElementById('gridHeightInput');

resetButton.addEventListener('click', () => {
    const etchGridCell = document.querySelectorAll('div.etchGridCell');
    etchGrid.style.display = 'none';
    inputDimensions.style.display = 'flex';
    for (i = 0; i <= 16; i++){
        etchGridCell.forEach(function(element){
            element.style.backgroundColor = 'white'
        });
    }
});
confirmGridDimensions.addEventListener('click', () => {
    let gridHeight = inputDimensionButtons[0].value;
    let gridWidth = inputDimensionButtons[1].value;
});
function createGrid(){
    for(i = 1; i <= 16; i++){
        const newGridCell = document.createElement('div');
        newGridCell.classList.add('etchGridCell');
        newGridCell.id = 'cell' + i;
        newGridCell.addEventListener('mouseover', (event) => {
            newGridCell.style.backgroundColor = 'black';
        });
        etchGrid.appendChild(newGridCell);

    }
}