const etchGrid = document.getElementById('etchGrid');
const resetButton = document.getElementById('resetButton');

createGrid();

resetButton.addEventListener('click', () => {
    const etchGridCell = document.querySelectorAll('div.etchGridCell');
    for (i = 0; i <= 16; i++){
        etchGridCell.forEach(function(element){
            element.style.backgroundColor = 'white'
        });
    }
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