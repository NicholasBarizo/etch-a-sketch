const etchGrid = document.getElementById('etchGrid');
const resetButton = document.getElementById('resetButton');
const inputDimensions = document.getElementById('inputDimensions');
const confirmGridDimensions = document.getElementById('confirmGridDimensions');
const inputDimensionButtons = document.getElementById('inputDimensionButtons');
const etchGridCell = document.getElementsByClassName('etchGridCell');
let gridHeight = 4;
let gridWidth = 4;
let gridCellCount = gridHeight * gridWidth;
let root = document.querySelector(':root');
createGrid();
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
window.addEventListener('resize', () => {
    if(window.innerWidth > window.innerHeight){
        let gridHeightWidth = window.innerHeight / gridHeight * .8 + 'px';
        // let setGridCellWidth = window.innerWidth / gridWidth + 'px';
        root.style.setProperty('--gridWidthPixels', etchGrid.offsetHeight + 'px');
        root.style.setProperty('--gridCellHeight', gridHeightWidth);
        root.style.setProperty('--gridCellWidth', etchGrid.offsetWidth / gridWidth + 'px');
        
    }
    else{
        // root.style.setProperty('--gridCellHeight', '3px');
        root.style.setProperty('--gridWidthPixels', '80%');
        root.style.setProperty('--gridCellHeight', etchGrid.offsetWidth / gridHeight + 'px');
        root.style.setProperty('--gridCellWidth', window.innerWidth / gridWidth * .8 + 'px');
        // root.style.setProperty('--gridWidthPixels', );
    }
});

document.getElementById('setColumn').addEventListener('click', function() {
    root.style.setProperty('--gridCellHeight', '3px');
});

function createGrid(){

    // Set Grid Column Count
    let setGridColumns = 'auto';
    for (i = 1; i < gridWidth; i++){
        setGridColumns += ' auto'
    }
    etchGrid.style.gridTemplateColumns = setGridColumns;

    // Create Grid Cells
    for(i = 1; i <= gridCellCount; i++){
        const newGridCell= document.createElement('div');
        newGridCell.classList.add('etchGridCell');
        newGridCell.id = 'cell' + i;
        newGridCell.addEventListener('mouseover', () => {
            newGridCell.style.backgroundColor = 'black';
        });
        etchGrid.appendChild(newGridCell);

    }
    // Set Cell Dimensions
    let widthPixels = etchGrid.offsetWidth / gridWidth;
    etchGrid.height = etchGrid.offsetWidth;
    let heightPixels = etchGrid.offsetHeight / gridHeight;
    for(i = 0; i < gridCellCount; i++){
        
        root.style.setProperty('--gridCellHeight', heightPixels + 'px');
        root.style.setProperty('--gridCellWidth', widthPixels + 'px');
        // etchGridCell[i].style.width = widthPixels + 'px';
        // etchGridCell[i].style.height = heightPixels + 'px';

        
    }
   
    
}