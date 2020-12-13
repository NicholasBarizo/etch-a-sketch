const etchGrid = document.getElementById('etchGrid');
const resetButton = document.getElementById('resetButton');
const resetPanel = document.getElementById('resetPanel');
const confirmGridDimensions = document.getElementById('confirmGridDimensions');
const inputDimensionButtons = document.getElementById('inputDimensionButtons');
const etchGridCell = document.getElementsByClassName('etchGridCell');
let gridHeight = 4;
let gridWidth = 4;
let gridCellCount = gridHeight * gridWidth;
let root = document.querySelector(':root');
createGrid();

resetButton.addEventListener('click', () => {
    
    etchGrid.style.display = 'none';
    resetPanel.style.display = 'block';
    resetButton.style.display ='none';

});

confirmGridDimensions.addEventListener('click', function(){
    gridWidth = inputDimensionButtons[0].value;
    gridHeight = inputDimensionButtons[1].value;
    
    if(gridHeight > 0 && gridWidth  > 0) { 
        etchGrid.style.display ='grid';
        while (etchGrid.firstChild){
            etchGrid.removeChild(etchGrid.firstChild);
        }
        
        gridCellCount = gridWidth * gridHeight;
        createGrid();
        resetButton.style.display ='block';
        let gridChecked = document.getElementById('gridCheck');
        if (gridChecked.checked) {
            root.style.setProperty('--etchGridCellBorder', '1px solid hsl(0 0% 95%)');
        }
        else{
            root.style.setProperty('--etchGridCellBorder', 'none');
        }
    }

});
window.addEventListener('resize', () => {
    fitGridToWindow();
});


function createGrid(){
    resetPanel.style.display ='none';
    // Set Grid Column Count
    let setGridColumns = 'auto';
    for (i = 1; i < gridWidth; i++){
        setGridColumns += ' auto'
    }
    etchGrid.style.gridTemplateColumns = setGridColumns;

    // Create Grid Cells
    let penType = document.querySelector('input[name=penType]:checked').value;
    if(penType == 'solidPen'){
        for(i = 1; i <= gridCellCount; i++){
            const newGridCell= document.createElement('div');
            newGridCell.classList.add('etchGridCell');
            newGridCell.id = 'cell' + i;
        
            etchGrid.appendChild(newGridCell);
            newGridCell.addEventListener('mouseover', () => {
                newGridCell.style.backgroundColor = 'black';
            });
        }
    }
    if(penType == 'rainbowPen'){
        for(i = 1; i <= gridCellCount; i++){
            const newGridCell= document.createElement('div');
            newGridCell.classList.add('etchGridCell');
            newGridCell.id = 'cell' + i;
            
            etchGrid.appendChild(newGridCell);
            newGridCell.addEventListener('mouseover', () => {
                let randomParameter1 = Math.floor(Math.random() * 255);
                let randomParameter2 = Math.floor(Math.random() * 255);
                let randomParameter3 = Math.floor(Math.random() * 255);

                newGridCell.style.backgroundColor = 'rgb(' +randomParameter1 + ', ' + 
                        randomParameter2 + ', ' + randomParameter3 + ')';
            });
        }
    }
    if(penType == 'darkenPen'){
        for(i = 1; i <= gridCellCount; i++){
            const newGridCell= document.createElement('div');
            newGridCell.classList.add('etchGridCell');
            newGridCell.id = 'cell' + i;
            
            etchGrid.appendChild(newGridCell);
            newGridCell.addEventListener('mouseover', () =>{

            });
        }
    }

    // Set Cell Dimensions
    fitGridToWindow();   
    
}

function fitGridToWindow(){
    if(window.innerWidth > window.innerHeight){
        root.style.setProperty('--gridCellHeight', window.innerHeight / gridHeight * .8 + 'px');
        root.style.setProperty('--gridWidthPixels', window.innerHeight * .8 + 'px');
        root.style.setProperty('--gridCellWidth', window.innerHeight / gridWidth * .8 + 'px');
        
    }
    else{
        root.style.setProperty('--gridWidthPixels', '80%');
        root.style.setProperty('--gridCellHeight', etchGrid.offsetWidth / gridHeight + 'px');
        root.style.setProperty('--gridCellWidth', (window.innerWidth * .8) / gridWidth  + 'px');

    }
}