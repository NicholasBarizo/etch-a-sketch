const etchGrid = document.getElementById('etchGrid');
const resetButton = document.getElementById('resetButton');
const inputDimensions = document.getElementById('inputDimensions');
const confirmGridDimensions = document.getElementById('confirmGridDimensions');
const inputDimensionButtons = document.getElementById('inputDimensionButtons');
const etchGridCell = document.getElementsByClassName('etchGridCell');
let gridHeight = 4;
let gridWidth = 4;
let gridCellCount = gridHeight * gridWidth;

createGrid();
alert(etchGridCell[1]);
// etchGridCell[1].style.width ='50px';
resetButton.addEventListener('click', () => {
    
    etchGrid.style.display = 'none';
    inputDimensions.style.display = 'flex';
    // for (i = 0; i <= 16; i++){
    //     etchGridCell.forEach(function(element){
    //         element.style.backgroundColor = 'white'
    //     });
    // }
});

confirmGridDimensions.addEventListener('click', function(){
    while (etchGrid.firstChild){
        etchGrid.removeChild(etchGrid.firstChild);
    }
    gridWidth = inputDimensionButtons[0].value;
    gridHeight = inputDimensionButtons[1].value;
    gridCellCount = gridWidth * gridHeight;
    createGrid();
});

document.getElementById('setColumn').addEventListener('click', function() {
    etchGrid.style.gridTemplateColumns='auto auto auto';
});

function createGrid(){
    let setGridColumns = 'auto';
    for (i = 1; i < gridWidth; i++){
        setGridColumns += ' auto'
    }
    // alert(setGridColumns);
    etchGrid.style.gridTemplateColumns = setGridColumns;

    for(i = 1; i <= gridCellCount; i++){
        const newGridCell= document.createElement('div');
        newGridCell.classList.add('etchGridCell');
        newGridCell.id = 'cell' + i;
        newGridCell.addEventListener('mouseover', () => {
            newGridCell.style.backgroundColor = 'black';
        });
        etchGrid.appendChild(newGridCell);

    }
    etchGridCell[1].style.width ='50px';
    let widthPixels = 400 / gridWidth;
    let heightPixels = 400 / gridHeight;
    for(i = 0; i < gridCellCount; i++){
        etchGridCell[i].style.width = widthPixels + 'px';
        etchGridCell[i].style.height = heightPixels + 'px';

        
    }
   
    
}