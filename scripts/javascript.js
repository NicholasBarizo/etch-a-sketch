const etchGrid = document.getElementById('etchGrid');
createGrid();
function createGrid(){
    for(i = 1; i <= 16; i++){
        const newGridCell = document.createElement('div');
        newGridCell.classList.add('etchGridCell');
        etchGrid.appendChild(newGridCell);
    }
}