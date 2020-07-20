//Make Color menu appear on click
const colorPopUp = document.querySelector('.colorPopUp');
const colorPopUpButton = document.querySelector('.rightWheel');

colorPopUpButton.addEventListener('click', function() {
    colorPopUp.style.cssText = "visibility: visible;";
})


function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


//Make Grid Size Menu appear upon click
const gridSize = document.querySelector('.numberInput').value;
const gridPopUp = document.querySelector('.gridPopUp');
const gridPopUpButton = document.querySelector('.leftWheel');

gridPopUpButton.addEventListener('click', function() {
    gridPopUp.style.cssText = "visibility: visible;";
})



//Create custom Grid Size
let container = document.querySelector('#innerBox');

function createGrid (gridSize) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
    for (let i = 0; i < gridSize*gridSize; i++) {
        let box = document.createElement('div');
        box.id = 'box' + i;
        box.classList.add('gridItem');
        box.addEventListener('mouseenter', fillBox);
        container.appendChild(box);
    }
}

let gridColor = 'black';
let rainbow = random_rgba();


function fillBox (e){
    e.target.style.backgroundColor = gridColor;
}

const gridSizeInput = document.forms['numberForm'];

gridSizeInput.addEventListener('submit', function(e){
    e.preventDefault();
    const value = gridSizeInput.querySelector('input[type="number"]').value;
    gridPopUp.style.cssText = "visibility: hidden;";
    createGrid(value);
})

createGrid(12);



//Clear Grid of all colors
const clearButton = document.querySelector('.resetButton');

function clearGridItems() {
    items = document.querySelectorAll('.gridItem');
    console.log(items.length);
    for (var i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = 'white';
    }
}

clearButton.addEventListener('click', clearGridItems);

//Change Color of Grid
const colorInput = document.forms['colorForm']


colorInput.addEventListener('submit', function(e) {
    e.preventDefault();
    const value = colorInput.querySelector('input[name=colorType]:checked').value;
    if(value == 'blackColor'){
        gridColor = 'black';
    }else if (value == 'grayColor'){
        gridColor = 'gray';
    }else if (value == 'rainbowColor'){
        gridColor = rainbow;
    }else if (value == 'greenColor'){
        gridColor = 'green';
    }else if (value == 'blueColor'){
        gridColor = 'blue';
    }else if (value == 'redColor'){
        gridColor = 'red';
    }
    colorPopUp.style.cssText = "visibility: hidden;";
})
